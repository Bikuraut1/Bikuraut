import{a as e,o as t,s as n}from"./shared-BN5p_FEI.js";import{B as r,C as i,D as a,E as o,F as s,H as c,I as l,L as u,M as d,N as f,O as p,R as m,S as h,T as g,V as _,_ as v,a as y,b,c as ee,d as te,f as ne,g as re,h as ie,i as x,j as ae,l as oe,m as S,n as se,o as C,p as ce,r as w,t as le,u as T,v as E,w as ue,x as de,y as fe,z as D}from"./stage-DmsuOdwS.js";var O=new C,k=new r,A=class extends v{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new S([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new S([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new E(t,6,1);return this.setAttribute(`instanceStart`,new b(n,3,0)),this.setAttribute(`instanceEnd`,new b(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new E(t,6,1);return this.setAttribute(`instanceColorStart`,new b(n,3,0)),this.setAttribute(`instanceColorEnd`,new b(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new c(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new C);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),O.setFromBufferAttribute(t),this.boundingBox.union(O))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new f),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)k.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(k)),k.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(k));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};y.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new D},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},x.line={uniforms:m.merge([y.common,y.fog,y.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var j=class extends d{constructor(e){super({type:`LineMaterial`,uniforms:m.clone(x.line.uniforms),vertexShader:x.line.vertexShader,fragmentShader:x.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},M=new _,N=new r,P=new r,F=new _,I=new _,L=new _,R=new r,z=new o,B=new h,V=new r,H=new C,U=new f,W=new _,G,K;function q(e,t,n){return W.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),W.multiplyScalar(1/W.w),W.x=K/n.width,W.y=K/n.height,W.applyMatrix4(e.projectionMatrixInverse),W.multiplyScalar(1/W.w),Math.abs(Math.max(W.x,W.y))}function pe(e,t){let n=e.matrixWorld,i=e.geometry,a=i.attributes.instanceStart,o=i.attributes.instanceEnd,s=Math.min(i.instanceCount,a.count);for(let i=0,c=s;i<c;i++){B.start.fromBufferAttribute(a,i),B.end.fromBufferAttribute(o,i),B.applyMatrix4(n);let s=new r,c=new r;G.distanceSqToSegment(B.start,B.end,c,s),c.distanceTo(s)<K*.5&&t.push({point:c,pointOnLine:s,distance:G.origin.distanceTo(c),object:e,face:null,faceIndex:i,uv:null,uv1:null})}}function J(e,t,n){let i=t.projectionMatrix,a=e.material.resolution,o=e.matrixWorld,s=e.geometry,c=s.attributes.instanceStart,l=s.attributes.instanceEnd,u=Math.min(s.instanceCount,c.count),d=-t.near;G.at(1,L),L.w=1,L.applyMatrix4(t.matrixWorldInverse),L.applyMatrix4(i),L.multiplyScalar(1/L.w),L.x*=a.x/2,L.y*=a.y/2,L.z=0,R.copy(L),z.multiplyMatrices(t.matrixWorldInverse,o);for(let t=0,s=u;t<s;t++){if(F.fromBufferAttribute(c,t),I.fromBufferAttribute(l,t),F.w=1,I.w=1,F.applyMatrix4(z),I.applyMatrix4(z),F.z>d&&I.z>d)continue;if(F.z>d){let e=F.z-I.z,t=(F.z-d)/e;F.lerp(I,t)}else if(I.z>d){let e=I.z-F.z,t=(I.z-d)/e;I.lerp(F,t)}F.applyMatrix4(i),I.applyMatrix4(i),F.multiplyScalar(1/F.w),I.multiplyScalar(1/I.w),F.x*=a.x/2,F.y*=a.y/2,I.x*=a.x/2,I.y*=a.y/2,B.start.copy(F),B.start.z=0,B.end.copy(I),B.end.z=0;let s=B.closestPointToPointParameter(R,!0);B.at(s,V);let u=g.lerp(F.z,I.z,s),f=u>=-1&&u<=1,p=R.distanceTo(V)<K*.5;if(f&&p){B.start.fromBufferAttribute(c,t),B.end.fromBufferAttribute(l,t),B.start.applyMatrix4(o),B.end.applyMatrix4(o);let i=new r,a=new r;G.distanceSqToSegment(B.start,B.end,a,i),n.push({point:a,pointOnLine:i,distance:G.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Y=class extends a{constructor(e=new A,t=new j({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)N.fromBufferAttribute(t,e),P.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+N.distanceTo(P);let i=new E(r,2,1);return e.setAttribute(`instanceDistanceStart`,new b(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new b(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;G=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;K=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),U.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?K*.5:q(r,Math.max(r.near,U.distanceToPoint(G.origin)),s.resolution),U.radius+=c,G.intersectsSphere(U)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),H.copy(o.boundingBox).applyMatrix4(a);let l;l=n?K*.5:q(r,Math.max(r.near,H.distanceToPoint(G.origin)),s.resolution),H.expandByScalar(l),G.intersectsBox(H)!==!1&&(n?pe(this,t):J(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(M),this.material.uniforms.resolution.value.set(M.z,M.w))}},X=class extends A{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let r=0;r<t;r++)n[6*r]=e[r].x,n[6*r+1]=e[r].y,n[6*r+2]=e[r].z||0,n[6*r+3]=e[r+1].x,n[6*r+4]=e[r+1].y,n[6*r+5]=e[r+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},me=class extends Y{constructor(e=new X,t=new j({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Z=e?34:56,Q=6.2,he=2*Math.PI/4.1;function $(e,c={}){let d=e.closest(`.figure`),f=[...d.querySelectorAll(`[data-pol]`)],m=d.querySelector(`[data-ar]`),h=1,g=1,_=w(e,({scene:e,camera:c,renderer:d,redraw:f})=>{let _=n(),v=new T(_.hot),y=new T(_.hotHi),b=new T(_.cold),x=new T(_.coldHi),S=new re;e.add(S);let C=new de(new oe().setFromPoints([new r(-7,0,0),new r(7.4,0,0)]),new ue({color:9082027,dashSize:.12,gapSize:.12,transparent:!0,opacity:.55}));C.computeLineDistances(),S.add(C);let w=new a(new te(.07,.24,16),new p({color:9082027}));w.position.set(7.4,0,0),w.rotation.z=-Math.PI/2,S.add(w);let E=new ie(16,32,1910592,1317677);E.position.y=-1.9,S.add(E);let D=new ne(.018,.018,1,6);D.translate(0,.5,0);let O=new te(.06,.18,10);O.translate(0,.09,0);let k=(e,t)=>{let n=new fe(e,new p({color:t}),Z);return n.instanceMatrix.setUsage(ce),S.add(n),n},A=k(D,v),M=k(O,y),N=k(D,b),P=k(O,x);A.material.color.multiplyScalar(1.15),M.material.color.multiplyScalar(1.2);let F=new X,I=new j({color:y,linewidth:2.6,worldUnits:!1,transparent:!0,opacity:.95});I.color.multiplyScalar(1.1);let L=new me(F,I);S.add(L);let R=new X,z=new j({color:x,linewidth:1.4,transparent:!0,opacity:.55}),B=new me(R,z);S.add(B);let V=new Float32Array(783),H=new Float32Array(783),U=new i({color:v,transparent:!0,opacity:.18}),W=new oe;W.setAttribute(`position`,new ee(new Float32Array(783),3)),S.add(new de(W,U));let G=new a(new u(1.2,.012,6,96),new p({color:x,transparent:!0,opacity:.6}));G.rotation.y=Math.PI/2,S.add(G);let K=new s(new l({map:le(),color:v,transparent:!0,blending:2,depthWrite:!1}));K.scale.setScalar(1.6),K.position.set(-7,0,0),S.add(K);let q=se(d.domElement,{pitch:.32,yaw:-.55,onChange:f}),pe=new r(0,1,0),J=new r,Y=new ae,$=new o,ge=new r,_e=new r,ve=(e,t,n,r,i,a)=>{let o=Math.hypot(i,a);J.set(0,i,a),o>1e-4?J.divideScalar(o):J.set(0,1,0),Y.setFromUnitVectors(pe,J);let s=Math.max(o-.16,1e-4);$.compose(_e.set(r,0,0),Y,ge.set(1,s,1)),e.setMatrixAt(n,$);let c=o>.2?1:o/.2+1e-4;$.compose(_e.set(r,0,0).addScaledVector(J,s),Y,ge.set(c,c,c)),t.setMatrixAt(n,$)};return{resize(e,t){I.resolution.set(e,t),z.resolution.set(e,t)},update(e,n,r){g=r?h:g+(h-g)*Math.min(1,n*4);let i=t()?e*2.2:1.1,a=1.35,o=e=>{let t=he*e-i;return[a*Math.cos(t),a*g*Math.sin(t)]};for(let e=0;e<Z;e++){let t=-6.2+2*Q*e/(Z-1),[n,r]=o(t);ve(A,M,e,t,n,r),ve(N,P,e,t,-r*.7,n*.7)}[A,M,N,P].forEach(e=>e.instanceMatrix.needsUpdate=!0);let s=W.attributes.position.array;for(let e=0;e<=260;e++){let t=-6.2+2*Q*e/260,[n,r]=o(t);V.set([t,n,r],e*3),H.set([t,-r*.7,n*.7],e*3),s.set([t,-1.9,r],e*3)}F.setPositions(V),R.setPositions(H),W.attributes.position.needsUpdate=!0;let l=e*.55%1*2*Q-Q;G.position.x=l,G.scale.set(1,1.12,1.12*Math.max(g,.08)),G.material.opacity=.5*Math.sin((l+Q)/(2*Q)*Math.PI),K.material.opacity=.6+.3*Math.sin(e*4),q.step();let u=q.yaw+(t()?Math.sin(e*.12)*.25:0),d=14.5;if(c.position.set(Math.sin(u)*Math.cos(q.pitch)*d,Math.sin(q.pitch)*d,Math.cos(u)*Math.cos(q.pitch)*d),c.lookAt(.2,-.35,0),m){let e=g<.01?`∞`:`${(20*Math.log10(1/g)).toFixed(1)} dB`;m.textContent=e}},dispose(){q.dispose()}}},{...c,bloom:{strength:.75,radius:.35,threshold:.3}}),v=e=>{h=[0,1,.45][Number(e.dataset.pol)],f.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e))),t()||_.redraw()};return f.forEach(e=>e.addEventListener(`click`,()=>v(e))),_}export{$ as init};
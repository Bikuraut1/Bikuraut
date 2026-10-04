import{c as e,i as t,l as n,o as r,r as i,s as a}from"./shared-BkRN4mFK.js";var o=2.5,s=.5,c=299792458,l=e=>c/(e*o*.001)/1e9,u=e=>c/(e*1e9)/(o*.001),d=`#version 300 es
in vec2 p;
void main(){ gl_Position = vec4(p, 0.0, 1.0); }`,f=`#version 300 es
precision highp float;
uniform highp sampler2D F;
uniform lowp sampler2D M;
uniform float S;
out vec4 o;
void main(){
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 n = textureSize(F, 0) - 1;
  vec4 f = texelFetch(F, c, 0);
  float ezU = texelFetch(F, min(c + ivec2(0, 1), n), 0).r;
  float ezR = texelFetch(F, min(c + ivec2(1, 0), n), 0).r;
  float sb = texelFetch(M, c, 0).b;
  float d = 1.0 - 0.07 * sb * sb;
  o = vec4(f.r, (f.g - S * (ezU - f.r)) * d, (f.b + S * (ezR - f.r)) * d, f.a);
}`,p=`#version 300 es
precision highp float;
uniform highp sampler2D F;
uniform lowp sampler2D M;
uniform float S;
uniform float n;
uniform float w;
uniform vec4 src[4];   // x, y (cells), amplitude, phase
uniform vec4 line;     // x, y0, y1, amplitude  (plane-wave line source)
uniform vec4 pulse;    // x, y, start step, amplitude
out vec4 o;
void main(){
  ivec2 c = ivec2(gl_FragCoord.xy);
  vec4 f = texelFetch(F, c, 0);
  float hxD = texelFetch(F, max(c - ivec2(0, 1), ivec2(0)), 0).g;
  float hyL = texelFetch(F, max(c - ivec2(1, 0), ivec2(0)), 0).b;
  vec4 m = texelFetch(M, c, 0);
  float eps = 1.0 + m.r * 8.0;
  float ez = f.r + (S / eps) * ((f.b - hyL) - (f.g - hxD));
  vec2 P = vec2(c) + 0.5;
  float drive = sin(w * n);
  for (int i = 0; i < 4; i++) {
    vec4 s = src[i];
    if (s.z != 0.0) {
      vec2 d = P - s.xy;
      ez += s.z * sin(w * n + s.w) * exp(-dot(d, d) * 0.3) * 0.18;
    }
  }
  if (line.w != 0.0 && abs(P.x - line.x) < 1.0 && P.y > line.y && P.y < line.z) {
    ez += line.w * drive * 0.06;
  }
  if (pulse.w != 0.0) {
    vec2 d = P - pulse.xy;
    float t = (n - pulse.z) / 14.0;
    ez += pulse.w * exp(-t * t) * sin(w * 1.25 * (n - pulse.z)) * exp(-dot(d, d) * 0.22) * 0.9;
  }
  ez *= 1.0 - 0.07 * m.b * m.b;
  ez *= 1.0 - m.g;
  o = vec4(ez, f.g, f.b, max(f.a * 0.996, abs(ez)));
}`,m=`#version 300 es
precision highp float;
uniform highp sampler2D F;
uniform lowp sampler2D M;
uniform vec2 grid;
uniform vec2 view;
uniform float gain;
uniform float glow;
uniform vec3 cHot, cHotHi, cCold, cColdHi, cBg;
out vec4 o;
vec4 bil(vec2 g){
  vec2 b = floor(g - 0.5);
  vec2 fr = g - 0.5 - b;
  ivec2 i = ivec2(b);
  ivec2 n = ivec2(grid) - 1;
  vec4 a = texelFetch(F, clamp(i, ivec2(0), n), 0);
  vec4 bb = texelFetch(F, clamp(i + ivec2(1, 0), ivec2(0), n), 0);
  vec4 c = texelFetch(F, clamp(i + ivec2(0, 1), ivec2(0), n), 0);
  vec4 d = texelFetch(F, clamp(i + ivec2(1, 1), ivec2(0), n), 0);
  return mix(mix(a, bb, fr.x), mix(c, d, fr.x), fr.y);
}
void main(){
  vec2 uv = gl_FragCoord.xy / view;
  vec2 g = uv * grid;
  vec4 f = bil(g);
  float e = tanh(sign(f.r) * pow(abs(f.r) * gain, 0.72));
  float ae = abs(e);
  float halo = 0.0;
  for (int k = 0; k < 8; k++) {
    float a = float(k) * 0.785398;
    halo += bil(g + vec2(cos(a), sin(a)) * 5.0).a;
  }
  halo = clamp(pow(halo / 8.0 * gain, 0.8), 0.0, 1.4);
  vec3 side = e > 0.0 ? mix(cHot, cHotHi, smoothstep(0.6, 1.0, ae))
                      : mix(cCold, cColdHi, smoothstep(0.6, 1.0, ae));
  vec3 col = mix(cBg, side, smoothstep(0.0, 0.95, ae) * 0.92);
  col += mix(cCold, cHot, 0.45) * halo * 0.07 * glow;
  vec4 m = texture(M, uv);
  col = mix(col, vec3(0.70, 0.74, 0.84), m.g * 0.6);
  col += vec3(0.55, 0.62, 0.85) * m.r * 0.16;
  vec2 q = (uv - 0.5) * vec2(view.x / view.y, 1.0);
  col *= mix(0.5, 1.0, smoothstep(1.15, 0.25, length(q)));
  o = vec4(col, 1.0);
}`;function h(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r));return r}function g(e,t){let n=e.createProgram();if(e.attachShader(n,h(e,e.VERTEX_SHADER,d)),e.attachShader(n,h(e,e.FRAGMENT_SHADER,t)),e.bindAttribLocation(n,0,`p`),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw Error(e.getProgramInfoLog(n));let r={},i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let t=0;t<i;t++){let i=e.getActiveUniform(n,t).name.replace(`[0]`,``);r[i]=e.getUniformLocation(n,i)}return{p:n,u:r}}function _(c,d={}){let h=document.createElement(`canvas`);h.setAttribute(`aria-hidden`,`true`),c.append(h);let _=h.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1});if(!_||!_.getExtension(`EXT_color_buffer_float`))throw h.remove(),Error(`Float render targets are not available.`);let v=g(_,f),y=g(_,p),b=g(_,m),x=_.createVertexArray();_.bindVertexArray(x);let S=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,S),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),_.STATIC_DRAW),_.enableVertexAttribArray(0),_.vertexAttribPointer(0,2,_.FLOAT,!1,0,0);let C=d.cell??3,w=d.geometry,T=d.lambda??u(5.8),E=0,D=0,O=0,k=0,A=[],j=[],M=null,N=null,P=0,F=0,I=0,L=[],R=null,z={x:0,y:0,amp:0,target:0},B=[0,0,-1e6,0],V=new Float32Array(4);function ee(){let e=_.createTexture();_.bindTexture(_.TEXTURE_2D,e),_.texImage2D(_.TEXTURE_2D,0,_.RGBA32F,E,D,0,_.RGBA,_.FLOAT,null),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE);let t=_.createFramebuffer();if(_.bindFramebuffer(_.FRAMEBUFFER,t),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,e,0),_.checkFramebufferStatus(_.FRAMEBUFFER)!==_.FRAMEBUFFER_COMPLETE)throw Error(`Field framebuffer incomplete.`);return _.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),[e,t]}function H(){N=new Uint8Array(E*D*4);let e=Math.min(44,Math.round(Math.min(E,D)*.16));for(let t=0;t<D;t++)for(let n=0;n<E;n++){let r=Math.min(n,t,E-1-n,D-1-t);r<e&&(N[(t*E+n)*4+2]=Math.round((e-r)/e*255))}let t=w?.({cols:E,rows:D,lambda:T,mat:N,host:c,cell:C,W:O,H:k})||{};L=(t.sources||[]).map(e=>({amp:1,phase:0,...e})),R=t.line?{amp:1,...t.line}:null,M||=_.createTexture(),_.bindTexture(_.TEXTURE_2D,M),_.pixelStorei(_.UNPACK_ALIGNMENT,1),_.texImage2D(_.TEXTURE_2D,0,_.RGBA8,E,D,0,_.RGBA,_.UNSIGNED_BYTE,N),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE)}function U(){A.forEach(e=>_.deleteTexture(e)),j.forEach(e=>_.deleteFramebuffer(e)),A=[],j=[];for(let e=0;e<2;e++){let[e,t]=ee();A.push(e),j.push(t)}P=0,F=0,H()}function W(){O=Math.max(1,c.clientWidth),k=Math.max(1,c.clientHeight);let t=e();h.width=Math.round(O*t),h.height=Math.round(k*t),h.style.width=`${O}px`,h.style.height=`${k}px`;let n=Math.min(720,Math.ceil(O/C)),i=Math.min(480,Math.ceil(k/C));n!==E||i!==D?(E=n,D=i,U(),r()||X()):H(),Y()}function G(e,t){let n=1-P;_.bindFramebuffer(_.FRAMEBUFFER,j[n]),_.viewport(0,0,E,D),_.useProgram(e.p),_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,A[P]),_.uniform1i(e.u.F,0),_.activeTexture(_.TEXTURE1),_.bindTexture(_.TEXTURE_2D,M),_.uniform1i(e.u.M,1),_.uniform1f(e.u.S,s),t?.(e.u),_.drawArrays(_.TRIANGLES,0,3),P=n}let K=new Float32Array(16);function q(e){let t=2*Math.PI*s/T;z.amp+=(z.target-z.amp)*.06,K.fill(0);let n=L.slice(0,3);z.amp>.01&&n.push({x:z.x,y:z.y,amp:z.amp*.9,phase:0}),n.forEach((e,t)=>K.set([e.x,e.y,e.amp,e.phase],t*4));for(let n=0;n<e;n++)G(v),G(y,e=>{_.uniform1f(e.n,F),_.uniform1f(e.w,t),_.uniform4fv(e.src,K),_.uniform4f(e.line,R?.x??0,R?.y0??0,R?.y1??0,R?R.amp:0),_.uniform4f(e.pulse,...B)}),F++}let J=e=>i(e);function Y(){let e=a();_.bindFramebuffer(_.FRAMEBUFFER,null),_.viewport(0,0,h.width,h.height),_.useProgram(b.p),_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,A[P]),_.uniform1i(b.u.F,0),_.activeTexture(_.TEXTURE1),_.bindTexture(_.TEXTURE_2D,M),_.uniform1i(b.u.M,1),_.uniform2f(b.u.grid,E,D),_.uniform2f(b.u.view,h.width,h.height),_.uniform1f(b.u.gain,d.gain??3.2),_.uniform1f(b.u.glow,d.glow??1),_.uniform3fv(b.u.cHot,J(e.hot)),_.uniform3fv(b.u.cHotHi,J(e.hotHi)),_.uniform3fv(b.u.cCold,J(e.cold)),_.uniform3fv(b.u.cColdHi,J(e.coldHi)),_.uniform3fv(b.u.cBg,J(e.void)),_.drawArrays(_.TRIANGLES,0,3)}function X(){q(Math.round(Math.max(E,D)*2.6))}function te(e,t,n){if(!n&&r()){I+=Math.min(t,.05)*180*(d.speed??1);let e=Math.floor(I);I-=e,e>0&&q(e),d.onFrame?.($.stats())}Y()}let ne=new ResizeObserver(()=>W());ne.observe(c),W();let Z=Math.max(0,Math.min(2e3,Number(new URLSearchParams(location.search).get(`warm`))||0));t()?X():Z?q(Z):d.headStart&&q(d.headStart),Y();let re=n(c,te,{enabled:d.enabled!==!1}),Q=(e,t)=>[e/C,(k-t)/C],$={canvas:h,get cols(){return E},get rows(){return D},stats(){return{step:F,ghz:l(T),lambdaMm:T*o}},setGeometry(e){w=e,U(),r()?Z&&q(Z):X(),Y()},repaint(){H(),Y()},setLambda(e){T=e,H()},setGHz(e){$.setLambda(u(e))},pointerMove(e,t,n=!0){let[i,a]=Q(e,t);z.x=i,z.y=a,z.target=n&&r()?1:0},pointerLeave(){z.target=0},fire(e,t){let[n,i]=Q(e,t);B=[n,i,F,1],r()||(q(260),Y())},probe(e,t){let[n,r]=Q(e,t),i=Math.max(0,Math.min(E-1,Math.floor(n))),a=Math.max(0,Math.min(D-1,Math.floor(r)));return _.bindFramebuffer(_.FRAMEBUFFER,j[P]),_.readPixels(i,a,1,1,_.RGBA,_.FLOAT,V),{ez:V[0],envelope:V[3]}},destroy(){re(),ne.disconnect(),A.forEach(e=>_.deleteTexture(e)),j.forEach(e=>_.deleteFramebuffer(e)),_.deleteTexture(M),_.getExtension(`WEBGL_lose_context`)?.loseContext(),h.remove()}};return $}function v(e,t,n,r,i,a,o=255){let{cols:s,rows:c,mat:l}=e;for(let e=Math.max(0,Math.floor(n));e<Math.min(c,Math.ceil(i));e++)for(let n=Math.max(0,Math.floor(t));n<Math.min(s,Math.ceil(r));n++)l[(e*s+n)*4+a]=o}var y=e=>Math.round((e-1)/8*255);function b(e,t,n=4){let{cols:r,rows:i,mat:a,host:o,W:s,H:c}=e,l=t.querySelectorAll(`[data-word]`);if(!l.length||!s||!c)return;let u=document.createElement(`canvas`);u.width=Math.ceil(s),u.height=Math.ceil(c);let d=u.getContext(`2d`),f=o.getBoundingClientRect(),p=getComputedStyle(t);d.font=`${p.fontStyle} ${p.fontWeight} ${p.fontSize} ${p.fontFamily}`,`letterSpacing`in d&&(d.letterSpacing=p.letterSpacing),d.fillStyle=`#fff`,d.textBaseline=`alphabetic`,l.forEach(e=>{let t=e.getBoundingClientRect(),n=d.measureText(e.textContent),r=n.fontBoundingBoxAscent??parseFloat(p.fontSize)*.9,i=n.fontBoundingBoxDescent??parseFloat(p.fontSize)*.25,a=t.top-f.top+(t.height-(r+i))/2+r;d.fillText(e.textContent,t.left-f.left,a)});let m=document.createElement(`canvas`);m.width=r,m.height=i;let h=m.getContext(`2d`);h.imageSmoothingQuality=`high`,h.drawImage(u,0,0,r*e.cell,i*e.cell,0,0,r,i);let g=h.getImageData(0,0,r,i).data,_=y(n);for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=g[(e*r+t)*4+3];n>24&&(a[((i-1-e)*r+t)*4]=Math.round(_*n/255))}}var x=e=>e.rows>e.cols*1.05;function S(e,t){let n=Math.round(e.cols*t),r=e.rows*.5,i=e.lambda*1.7,a=e.lambda*.55;return v(e,n,0,n+4,e.rows,1),v(e,n,r+i/2-a/2,n+4,r+i/2+a/2,1,0),v(e,n,r-i/2-a/2,n+4,r-i/2+a/2,1,0),{line:{x:Math.round(e.cols*.08)+.5,y0:0,y1:e.rows}}}var C={name:e=>t=>(b(t,e,3),x(t)?{sources:[{x:t.cols*.72,y:t.rows*.78}]}:{sources:[{x:t.cols*.66,y:t.rows*.7}]}),metasurface:e=>{let t=e.lambda*.38,n=e.lambda*.18;return(x(e)?[.5]:[.56,.56+e.lambda*.5/e.cols]).forEach((r,i)=>{let a=e.cols*r;for(let r=e.rows*.06+(i?(t+n)/2:0);r<e.rows*.94;r+=t+n)v(e,a,r,a+3,r+t,1)}),x(e)?{sources:[{x:e.cols*.5,y:e.rows*.8}]}:{sources:[{x:e.cols*.3,y:e.rows*.55}]}},slit:e=>S(e,x(e)?.3:.4),contact:e=>x(e)?{sources:[{x:e.cols*.5-e.lambda*1.1,y:e.rows*.84},{x:e.cols*.5+e.lambda*1.1,y:e.rows*.84}]}:S(e,.66),free:e=>({sources:[{x:e.cols*.5-e.lambda*1.3,y:e.rows*.55},{x:e.cols*.5+e.lambda*1.3,y:e.rows*.55}]})};export{_ as n,C as t};
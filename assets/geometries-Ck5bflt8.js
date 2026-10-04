import{a as e,c as t,i as n,l as r,o as i,r as a,s as o}from"./shared-BDdSibsC.js";var s=2.5,c=.5,l=299792458,u=e=>l/(e*s*.001)/1e9,d=e=>l/(e*1e9)/(s*.001),f=`#version 300 es
in vec2 p;
void main(){ gl_Position = vec4(p, 0.0, 1.0); }`,p=`#version 300 es
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
}`,m=`#version 300 es
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
}`,h=`#version 300 es
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
}`;function g(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r));return r}function _(e,t){let n=e.createProgram();if(e.attachShader(n,g(e,e.VERTEX_SHADER,f)),e.attachShader(n,g(e,e.FRAGMENT_SHADER,t)),e.bindAttribLocation(n,0,`p`),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw Error(e.getProgramInfoLog(n));let r={},i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let t=0;t<i;t++){let i=e.getActiveUniform(n,t).name.replace(`[0]`,``);r[i]=e.getUniformLocation(n,i)}return{p:n,u:r}}function v(l,f={}){let g=document.createElement(`canvas`);g.setAttribute(`aria-hidden`,`true`),l.append(g);let v=g.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1});if(!v||!v.getExtension(`EXT_color_buffer_float`))throw g.remove(),Error(`Float render targets are not available.`);let y=_(v,p),b=_(v,m),x=_(v,h),S=v.createVertexArray();v.bindVertexArray(S);let C=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,C),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),v.STATIC_DRAW),v.enableVertexAttribArray(0),v.vertexAttribPointer(0,2,v.FLOAT,!1,0,0);let w=f.cell??(e?4:3),T=f.geometry,E=f.lambda??d(5.8),D=0,O=0,k=0,A=0,j=[],M=[],N=null,P=null,F=0,I=0,L=0,R=[],z=null,B={x:0,y:0,amp:0,target:0},ee=[0,0,-1e6,0],V=new Float32Array(4);function te(){let e=v.createTexture();v.bindTexture(v.TEXTURE_2D,e),v.texImage2D(v.TEXTURE_2D,0,v.RGBA32F,D,O,0,v.RGBA,v.FLOAT,null),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE);let t=v.createFramebuffer();if(v.bindFramebuffer(v.FRAMEBUFFER,t),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,e,0),v.checkFramebufferStatus(v.FRAMEBUFFER)!==v.FRAMEBUFFER_COMPLETE)throw Error(`Field framebuffer incomplete.`);return v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),[e,t]}function H(){P=new Uint8Array(D*O*4);let e=Math.min(44,Math.round(Math.min(D,O)*.16));for(let t=0;t<O;t++)for(let n=0;n<D;n++){let r=Math.min(n,t,D-1-n,O-1-t);r<e&&(P[(t*D+n)*4+2]=Math.round((e-r)/e*255))}let t=T?.({cols:D,rows:O,lambda:E,mat:P,host:l,cell:w,W:k,H:A})||{};R=(t.sources||[]).map(e=>({amp:1,phase:0,...e})),z=t.line?{amp:1,...t.line}:null,N||=v.createTexture(),v.bindTexture(v.TEXTURE_2D,N),v.pixelStorei(v.UNPACK_ALIGNMENT,1),v.texImage2D(v.TEXTURE_2D,0,v.RGBA8,D,O,0,v.RGBA,v.UNSIGNED_BYTE,P),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.LINEAR),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.LINEAR),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE)}function U(){j.forEach(e=>v.deleteTexture(e)),M.forEach(e=>v.deleteFramebuffer(e)),j=[],M=[];for(let e=0;e<2;e++){let[e,t]=te();j.push(e),M.push(t)}F=0,I=0,H()}function W(){k=Math.max(1,l.clientWidth),A=Math.max(1,l.clientHeight);let e=t();g.width=Math.round(k*e),g.height=Math.round(A*e),g.style.width=`${k}px`,g.style.height=`${A}px`;let n=Math.min(720,Math.ceil(k/w)),r=Math.min(480,Math.ceil(A/w));n!==D||r!==O?(D=n,O=r,U(),i()||Y()):H(),J()}function ne(e,t){let n=1-F;v.bindFramebuffer(v.FRAMEBUFFER,M[n]),v.viewport(0,0,D,O),v.useProgram(e.p),v.activeTexture(v.TEXTURE0),v.bindTexture(v.TEXTURE_2D,j[F]),v.uniform1i(e.u.F,0),v.activeTexture(v.TEXTURE1),v.bindTexture(v.TEXTURE_2D,N),v.uniform1i(e.u.M,1),v.uniform1f(e.u.S,c),t?.(e.u),v.drawArrays(v.TRIANGLES,0,3),F=n}let G=new Float32Array(16);function K(e){let t=2*Math.PI*c/E;B.amp+=(B.target-B.amp)*.06,G.fill(0);let n=R.slice(0,3);B.amp>.01&&n.push({x:B.x,y:B.y,amp:B.amp*.9,phase:0}),n.forEach((e,t)=>G.set([e.x,e.y,e.amp,e.phase],t*4));for(let n=0;n<e;n++)ne(y),ne(b,e=>{v.uniform1f(e.n,I),v.uniform1f(e.w,t),v.uniform4fv(e.src,G),v.uniform4f(e.line,z?.x??0,z?.y0??0,z?.y1??0,z?z.amp:0),v.uniform4f(e.pulse,...ee)}),I++}let q=e=>a(e);function J(){let e=o();v.bindFramebuffer(v.FRAMEBUFFER,null),v.viewport(0,0,g.width,g.height),v.useProgram(x.p),v.activeTexture(v.TEXTURE0),v.bindTexture(v.TEXTURE_2D,j[F]),v.uniform1i(x.u.F,0),v.activeTexture(v.TEXTURE1),v.bindTexture(v.TEXTURE_2D,N),v.uniform1i(x.u.M,1),v.uniform2f(x.u.grid,D,O),v.uniform2f(x.u.view,g.width,g.height),v.uniform1f(x.u.gain,f.gain??3.2),v.uniform1f(x.u.glow,f.glow??1),v.uniform3fv(x.u.cHot,q(e.hot)),v.uniform3fv(x.u.cHotHi,q(e.hotHi)),v.uniform3fv(x.u.cCold,q(e.cold)),v.uniform3fv(x.u.cColdHi,q(e.coldHi)),v.uniform3fv(x.u.cBg,q(e.void)),v.drawArrays(v.TRIANGLES,0,3)}function Y(){K(Math.round(Math.max(D,O)*2.6))}function re(e,t,n){if(!n&&i()){L+=Math.min(t,.05)*180*(f.speed??1);let e=Math.floor(L);L-=e,e>0&&K(e),f.onFrame?.($.stats())}J()}let X=new ResizeObserver(()=>W());X.observe(l),W();let Z=Math.max(0,Math.min(2e3,Number(new URLSearchParams(location.search).get(`warm`))||0));n()?Y():Z?K(Z):f.headStart&&K(f.headStart),J();let ie=r(l,re,{enabled:f.enabled!==!1}),Q=(e,t)=>[e/w,(A-t)/w],$={canvas:g,get cols(){return D},get rows(){return O},stats(){return{step:I,ghz:u(E),lambdaMm:E*s}},setGeometry(e){T=e,U(),i()?Z&&K(Z):Y(),J()},repaint(){H(),J()},setLambda(e){E=e,H()},setGHz(e){$.setLambda(d(e))},pointerMove(e,t,n=!0){let[r,a]=Q(e,t);B.x=r,B.y=a,B.target=n&&i()?1:0},pointerLeave(){B.target=0},fire(e,t){let[n,r]=Q(e,t);ee=[n,r,I,1],i()||(K(260),J())},probe(e,t){let[n,r]=Q(e,t),i=Math.max(0,Math.min(D-1,Math.floor(n))),a=Math.max(0,Math.min(O-1,Math.floor(r)));return v.bindFramebuffer(v.FRAMEBUFFER,M[F]),v.readPixels(i,a,1,1,v.RGBA,v.FLOAT,V),{ez:V[0],envelope:V[3]}},destroy(){ie(),X.disconnect(),j.forEach(e=>v.deleteTexture(e)),M.forEach(e=>v.deleteFramebuffer(e)),v.deleteTexture(N),v.getExtension(`WEBGL_lose_context`)?.loseContext(),g.remove()}};return $}function y(e,t,n,r,i,a,o=255){let{cols:s,rows:c,mat:l}=e;for(let e=Math.max(0,Math.floor(n));e<Math.min(c,Math.ceil(i));e++)for(let n=Math.max(0,Math.floor(t));n<Math.min(s,Math.ceil(r));n++)l[(e*s+n)*4+a]=o}var b=e=>Math.round((e-1)/8*255);function x(e,t,n=4){let{cols:r,rows:i,mat:a,host:o,W:s,H:c}=e,l=t.querySelectorAll(`[data-word]`);if(!l.length||!s||!c)return;let u=document.createElement(`canvas`);u.width=Math.ceil(s),u.height=Math.ceil(c);let d=u.getContext(`2d`),f=o.getBoundingClientRect(),p=getComputedStyle(t);d.font=`${p.fontStyle} ${p.fontWeight} ${p.fontSize} ${p.fontFamily}`,`letterSpacing`in d&&(d.letterSpacing=p.letterSpacing),d.fillStyle=`#fff`,d.textBaseline=`alphabetic`,l.forEach(e=>{let t=e.getBoundingClientRect(),n=d.measureText(e.textContent),r=n.fontBoundingBoxAscent??parseFloat(p.fontSize)*.9,i=n.fontBoundingBoxDescent??parseFloat(p.fontSize)*.25,a=t.top-f.top+(t.height-(r+i))/2+r;d.fillText(e.textContent,t.left-f.left,a)});let m=document.createElement(`canvas`);m.width=r,m.height=i;let h=m.getContext(`2d`);h.imageSmoothingQuality=`high`,h.drawImage(u,0,0,r*e.cell,i*e.cell,0,0,r,i);let g=h.getImageData(0,0,r,i).data,_=b(n);for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=g[(e*r+t)*4+3];n>24&&(a[((i-1-e)*r+t)*4]=Math.round(_*n/255))}}var S=e=>e.rows>e.cols*1.05;function C(e,t){let n=Math.round(e.cols*t),r=e.rows*.5,i=e.lambda*1.7,a=e.lambda*.55;return y(e,n,0,n+4,e.rows,1),y(e,n,r+i/2-a/2,n+4,r+i/2+a/2,1,0),y(e,n,r-i/2-a/2,n+4,r-i/2+a/2,1,0),{line:{x:Math.round(e.cols*.08)+.5,y0:0,y1:e.rows}}}var w={name:e=>t=>(x(t,e,3),S(t)?{sources:[{x:t.cols*.72,y:t.rows*.78}]}:{sources:[{x:t.cols*.66,y:t.rows*.7}]}),metasurface:e=>{let t=e.lambda*.38,n=e.lambda*.18;return(S(e)?[.5]:[.56,.56+e.lambda*.5/e.cols]).forEach((r,i)=>{let a=e.cols*r;for(let r=e.rows*.06+(i?(t+n)/2:0);r<e.rows*.94;r+=t+n)y(e,a,r,a+3,r+t,1)}),S(e)?{sources:[{x:e.cols*.5,y:e.rows*.8}]}:{sources:[{x:e.cols*.3,y:e.rows*.55}]}},slit:e=>C(e,S(e)?.3:.4),contact:e=>S(e)?{sources:[{x:e.cols*.5-e.lambda*1.1,y:e.rows*.84},{x:e.cols*.5+e.lambda*1.1,y:e.rows*.84}]}:C(e,.66),free:e=>({sources:[{x:e.cols*.5-e.lambda*1.3,y:e.rows*.55},{x:e.cols*.5+e.lambda*1.3,y:e.rows*.55}]})};export{v as n,w as t};
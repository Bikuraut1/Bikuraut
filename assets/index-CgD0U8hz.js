const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./katex-BWse1N-J.js","./rolldown-runtime-DK3Fl9T5.js","./katex.min-DnwO2wSq.js","./katex-BgsA2lO1.css"])))=>i.map(i=>d[i]);
import{_ as e,h as t,o as n,t as r,u as i,v as a,y as o}from"./shared-BkRN4mFK.js";import{r as s}from"./posts-DJFoAMDA.js";import{t as c}from"./postCard-Ct6IXRHd.js";import{t as l}from"./projects-Df1N0ssQ.js";import{n as u,t as d}from"./geometries-Bt2AIZ4C.js";import{t as f}from"./preload-helper-uBIymjUX.js";var[p,...m]=o.name.split(` `),h=o.publications.filter(e=>e.firstAuthor),g=[String.raw`\frac{\partial H_x}{\partial t} = -\frac{1}{\mu_0}\,\frac{\partial E_z}{\partial y}`,String.raw`\frac{\partial H_y}{\partial t} = \frac{1}{\mu_0}\,\frac{\partial E_z}{\partial x}`,String.raw`\frac{\partial E_z}{\partial t} = \frac{1}{\varepsilon}\left(\frac{\partial H_y}{\partial x} - \frac{\partial H_x}{\partial y}\right)`],_=[`∂Hx/∂t = −(1/μ₀) ∂Ez/∂y`,`∂Hy/∂t = (1/μ₀) ∂Ez/∂x`,`∂Ez/∂t = (1/ε)(∂Hy/∂x − ∂Hx/∂y)`],v=e=>`<div class="eq" data-tex="${e}">${a(_[e])}</div>`;r(`home`,`
<section class="hero" id="hero" aria-label="Introduction">
  <div class="hero-field" id="field" role="img" aria-label="Live simulation of electromagnetic waves passing through the letters of the name ${a(o.name)}"></div>
  <div class="hero-content wrap">
    <h1 class="hero-name"><span data-word>${a(p)}</span> <span data-word>${a(m.join(` `))}</span></h1>
    <div class="hero-foot">
      <div class="hero-intro d1">
        ${t(`hero-status`)}
        <p class="hero-role">${a(o.role)}</p>
      </div>
      <div class="hero-actions hero-intro d2">
        <a class="button solid" href="./projects.html">See the projects</a>
        <a class="button" href="${o.cv}" download>${e(`download`)}${a(o.ui.cv)}</a>
      </div>
    </div>
  </div>
  <div class="lab-dock">
    <button class="lab-toggle" type="button" aria-expanded="false" aria-controls="lab-panel">
      <span class="live-dot" aria-hidden="true"></span><span>Live simulation</span><span class="lab-toggle-meta mono" data-r="mini">5.80 GHz</span>
      <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <aside class="lab-panel" id="lab-panel" aria-labelledby="lab-title" hidden>
      <h2 id="lab-title">2D FDTD, E<sub>z</sub> field</h2>
      <dl class="lab-readouts">
        <div><dt>Frequency</dt><dd data-r="f">5.80 GHz</dd></div>
        <div><dt>Wavelength</dt><dd data-r="l">51.7 mm</dd></div>
        <div><dt>Time step</dt><dd data-r="n">0</dd></div>
        <div><dt>Probe E<sub>z</sub></dt><dd data-r="e">—</dd></div>
      </dl>
      <div class="segmented" role="group" aria-label="Geometry">
        ${o.geometries.map((e,t)=>`<button type="button" data-geo="${e.id}" aria-pressed="${t===0}">${a(e.label)}</button>`).join(``)}
      </div>
      <label class="slider">Frequency <input type="range" min="3" max="10" step="0.05" value="5.8" data-freq aria-label="Source frequency in gigahertz"></label>
      <p class="lab-hint">${a(o.home.labHint)}</p>
    </aside>
  </div>
  <div class="probe" aria-hidden="true"><span class="probe-ring"></span><span class="probe-value">E<sub>z</sub> 0.000</span></div>
</section>

<section class="section section-tight wrap">
  <div class="intro-grid">
    <div>
      <div class="intro-portrait"><img src="${o.photo}" alt="${a(o.photoAlt)}" width="160" height="160" loading="lazy"><div><p>${a(o.name)}</p><p class="dim">${a(o.jobTitle)}, ${a(o.affiliation)}</p></div></div>
      <p class="statement">${a(o.home.statement)}</p>
      <p class="intro-text">${a(o.intro)}</p>
      <div class="intro-actions">
        <a class="button" href="./research.html">Explore the research</a>
        <a class="button" href="./about.html">About me</a>
      </div>
    </div>
    <div>
      <dl class="highlights" aria-label="Research highlights">
        ${o.highlights.map(e=>`<div><dt>${a(e.value)}</dt><dd>${a(e.label)}</dd></div>`).join(``)}
      </dl>
      <p class="record-note">${a(o.recordNote)}</p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><div><h2>${a(o.home.projectsTitle)}</h2><p>${a(o.home.projectsText)}</p></div><a class="link" href="./projects.html">${a(o.home.allProjects)}</a></div>
  <div class="project-grid">${o.projects.map(l).join(``)}</div>
</section>

<section class="section section-tight wrap">
  <div class="news-layout">
    <h2>${a(o.home.newsTitle)}</h2>
    <ol class="news">
      ${o.news.map(e=>`<li><time>${a(e.date)}</time><p>${e.href?`<a href="${a(e.href)}" target="_blank" rel="noopener">${a(e.text)}</a>`:a(e.text)}</p></li>`).join(``)}
    </ol>
  </div>
</section>

<section class="section wrap" id="directions">
  <div class="section-head"><h2>${a(o.home.directionsTitle)}</h2><a class="link" href="./research.html">Research in detail</a></div>
  <ul class="directions">
    ${o.interests.map(e=>`<li class="direction"><h3>${a(e.title)}${e.current?`<span class="tag hot">${a(o.ui.current)}</span>`:``}</h3><p>${a(e.description)}</p></li>`).join(``)}
  </ul>
</section>

<section class="section wrap">
  <div class="lab-explain">
    <div>
      <h2>${a(o.home.labTitle)}</h2>
      <p>${a(o.home.labText)}</p>
      <p><a class="link" href="#hero">Back to the simulation</a></p>
    </div>
    <div class="equations" id="equations" aria-label="Maxwell's curl equations for the transverse magnetic case">
      ${v(0)}
      ${v(1)}
      <p class="eq-label">Faraday's law updates the magnetic field</p>
      ${v(2)}
      <p class="eq-label">Ampère's law updates the electric field</p>
      <p class="update-eq">Yee grid, Δx = 2.5 mm, Courant number cΔt/Δx = 0.5, absorbing sponge boundaries. Every frame runs about three time steps.</p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${a(o.home.featuredTitle)}</h2><a class="link" href="./publications.html">${a(o.home.allPublications)}</a></div>
  <div>${h.map(i).join(``)}</div>
</section>

${s.length?`<section class="section wrap">
  <div class="section-head"><h2>${a(o.home.blogTitle)}</h2><a class="link" href="./blog.html">${a(o.home.allPosts)}</a></div>
  <div class="post-list">${s.slice(0,2).map(c).join(``)}</div>
</section>`:``}
`);var y=document.getElementById(`equations`),b=new IntersectionObserver(async e=>{if(!e.some(e=>e.isIntersecting))return;b.disconnect();let[{default:t}]=await Promise.all([f(()=>import(`./katex-BWse1N-J.js`).then(e=>e.n),__vite__mapDeps([0,1]),import.meta.url),f(()=>import(`./katex.min-DnwO2wSq.js`).then(e=>e.t),__vite__mapDeps([2,1,3]),import.meta.url)]);y.querySelectorAll(`[data-tex]`).forEach(e=>{e.innerHTML=t.renderToString(g[Number(e.dataset.tex)],{throwOnError:!1,displayMode:!0})})},{rootMargin:`400px`});b.observe(y);var x=document.getElementById(`hero`),S=document.getElementById(`field`),C=x.querySelector(`.hero-name`),w=Object.fromEntries([...x.querySelectorAll(`[data-r]`)].map(e=>[e.dataset.r,e])),T=x.querySelector(`.probe`),E=T.querySelector(`.probe-value`),D=x.querySelector(`.lab-dock`),O=D.querySelector(`.lab-toggle`),k=D.querySelector(`.lab-panel`),A=null,j=0,M=null;O.addEventListener(`click`,()=>{let e=O.getAttribute(`aria-expanded`)!==`true`;O.setAttribute(`aria-expanded`,String(e)),k.hidden=!e}),addEventListener(`keydown`,e=>{e.key===`Escape`&&!k.hidden&&(k.hidden=!0,O.setAttribute(`aria-expanded`,`false`),O.focus())});try{A=u(S,{geometry:d.name(C),enabled:o.animations.field,headStart:140,cell:3,onFrame(e){if(j++,j%6==0&&!k.hidden&&(w.n.textContent=e.step.toLocaleString(`en-US`)),M&&j%4==0){let{ez:e}=A.probe(M.x,M.y),t=`${e>=0?`+`:`−`}${Math.abs(e).toFixed(3)}`;w.e.textContent=t,E.innerHTML=`E<sub>z</sub> ${t}`}}}),document.fonts.ready.then(()=>A.repaint())}catch(e){console.warn(`Field simulation unavailable:`,e),x.classList.add(`no-sim`),D.hidden=!0}if(A){let e=e=>{let t=S.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top,inside:e.clientY-t.top<t.height}},t=matchMedia(`(pointer: fine)`).matches;t||(x.querySelector(`.lab-hint`).textContent=`Tap the field to fire a pulse.`);let r=`.lab-dock, a, button`,i=()=>{M=null,A.pointerLeave(),T.classList.remove(`is-on`),x.classList.remove(`has-probe`)};x.addEventListener(`pointermove`,n=>{let a=e(n);if(!a.inside||n.target.closest(r))return i();M=a,n.pointerType===`mouse`&&A.pointerMove(a.x,a.y),t&&(T.style.transform=`translate(${n.clientX}px, ${n.clientY}px)`,T.classList.add(`is-on`),x.classList.add(`has-probe`))}),x.addEventListener(`pointerleave`,i),x.addEventListener(`pointerdown`,t=>{if(t.target.closest(r))return;let n=e(t);n.inside&&A.fire(n.x,n.y)});let a=[...x.querySelectorAll(`[data-geo]`)];a.forEach(e=>e.addEventListener(`click`,()=>{a.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e)));let t=e.dataset.geo;A.setGeometry(t===`name`?d.name(C):d[t]),C.style.transition=`opacity .5s`,C.style.opacity=t===`name`?`1`:`0.18`}));let o=x.querySelector(`[data-freq]`),s=()=>{let{ghz:e,lambdaMm:t}=A.stats();w.f.textContent=`${e.toFixed(2)} GHz`,w.mini.textContent=`${e.toFixed(2)} GHz`,w.l.textContent=`${t.toFixed(1)} mm`};w.n.textContent=A.stats().step.toLocaleString(`en-US`),o.addEventListener(`input`,()=>{A.setGHz(Number(o.value)),s()}),s(),document.addEventListener(`motionchange`,()=>!n()&&A.pointerLeave());let c=new URLSearchParams(location.search).get(`geo`);c&&a.find(e=>e.dataset.geo===c)?.click()}addEventListener(`pagehide`,e=>{e.persisted||A?.destroy()});
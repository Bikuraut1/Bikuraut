import{_ as e,g as t,o as n,t as r,u as i,v as a}from"./shared-BDdSibsC.js";import{n as o,t as s}from"./postCard-BILcGM_u.js";import{r as c}from"./posts-BF5A8mUR.js";import{n as l,t as u}from"./geometries-Ck5bflt8.js";var d=e=>o.renderToString(e,{throwOnError:!1,displayMode:!0}),[f,...p]=a.name.split(` `),m=a.publications.filter(e=>e.firstAuthor);r(`home`,`
<section class="hero" id="hero" aria-label="Introduction">
  <div class="hero-field" id="field" role="img" aria-label="Live simulation of electromagnetic waves passing through the letters of the name ${e(a.name)}"></div>
  <div class="hero-content wrap">
    <h1 class="hero-name"><span data-word>${e(f)}</span> <span data-word>${e(p.join(` `))}</span></h1>
    <div class="hero-foot">
      <p class="hero-role hero-intro d1">${e(a.role)}</p>
      <div class="hero-actions hero-intro d2">
        <a class="button solid" href="./publications.html">${e(a.ui.publications)}</a>
        <a class="button" href="${a.cv}" download>${t(`download`)}${e(a.ui.cv)}</a>
      </div>
    </div>
  </div>
  <aside class="lab-panel" aria-labelledby="lab-title">
    <h2 id="lab-title"><span class="live-dot" aria-hidden="true"></span>Live FDTD simulation</h2>
    <dl class="lab-readouts">
      <div><dt>Frequency</dt><dd data-r="f">5.80 GHz</dd></div>
      <div><dt>Wavelength</dt><dd data-r="l">51.7 mm</dd></div>
      <div><dt>Time step</dt><dd data-r="n">0</dd></div>
      <div><dt>Probe E<sub>z</sub></dt><dd data-r="e">—</dd></div>
    </dl>
    <div class="segmented" role="group" aria-label="Geometry">
      ${a.geometries.map((t,n)=>`<button type="button" data-geo="${t.id}" aria-pressed="${n===0}">${e(t.label)}</button>`).join(``)}
    </div>
    <label class="slider">Frequency <input type="range" min="3" max="10" step="0.05" value="5.8" data-freq aria-label="Source frequency in gigahertz"></label>
    <p class="lab-hint">${e(a.home.labHint)}</p>
  </aside>
  <div class="probe" aria-hidden="true"><span class="probe-ring"></span><span class="probe-value">E<sub>z</sub> 0.000</span></div>
</section>

<section class="section wrap">
  <div class="intro-grid">
    <div>
      <div class="intro-portrait"><img src="${a.photo}" alt="${e(a.photoAlt)}" width="160" height="160" loading="lazy"><div><p>${e(a.name)}</p><p class="dim">${e(a.affiliation)}</p></div></div>
      <p class="statement">${e(a.home.statement)}</p>
      <p class="intro-text">${e(a.intro)}</p>
      <div class="intro-actions">
        <a class="button" href="./research.html">Explore the research</a>
        <a class="button" href="./about.html">About me</a>
      </div>
    </div>
    <dl class="metrics" aria-label="Research record">
      ${a.metrics.map(t=>`<div><dt>${t.value}</dt><dd>${e(t.label)}</dd></div>`).join(``)}
    </dl>
  </div>
</section>

<section class="section wrap" id="directions">
  <div class="section-head"><h2>${e(a.home.directionsTitle)}</h2><a class="link" href="./research.html">Research in detail</a></div>
  <ul class="directions">
    ${a.interests.map(t=>`<li class="direction"><h3>${e(t.title)}${t.current?`<span class="tag hot">${e(a.ui.current)}</span>`:``}</h3><p>${e(t.description)}</p></li>`).join(``)}
  </ul>
</section>

<section class="section wrap">
  <div class="lab-explain">
    <div>
      <h2>${e(a.home.labTitle)}</h2>
      <p>${e(a.home.labText)}</p>
      <p><a class="link" href="#hero">Back to the simulation</a></p>
    </div>
    <div class="equations" aria-label="Maxwell's curl equations for the transverse magnetic case">
      ${d(String.raw`\frac{\partial H_x}{\partial t} = -\frac{1}{\mu_0}\,\frac{\partial E_z}{\partial y}`)}
      ${d(String.raw`\frac{\partial H_y}{\partial t} = \frac{1}{\mu_0}\,\frac{\partial E_z}{\partial x}`)}
      <p class="eq-label">Faraday's law updates the magnetic field</p>
      ${d(String.raw`\frac{\partial E_z}{\partial t} = \frac{1}{\varepsilon}\left(\frac{\partial H_y}{\partial x} - \frac{\partial H_x}{\partial y}\right)`)}
      <p class="eq-label">Ampère's law updates the electric field</p>
      <p class="update-eq">Yee grid, Δx = 2.5 mm, Courant number cΔt/Δx = 0.5, absorbing sponge boundaries. Every frame runs about three time steps.</p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(a.home.workflowTitle)}</h2><p>${e(a.home.workflowText)}</p></div>
  <div class="workflow" role="list">
    <span class="workflow-line" aria-hidden="true"></span>
    ${a.workflow.map((t,n)=>`<div class="step" role="listitem"><span class="step-no">${String(n+1).padStart(2,`0`)}</span><h3>${e(t.title)}</h3><p class="tools">${e(t.tools)}</p><p>${e(t.description)}</p></div>`).join(``)}
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(a.home.featuredTitle)}</h2><a class="link" href="./publications.html">${e(a.home.allPublications)}</a></div>
  <div>${m.map(i).join(``)}</div>
</section>

${c.length?`<section class="section wrap">
  <div class="section-head"><h2>${e(a.home.blogTitle)}</h2><a class="link" href="./blog.html">${e(a.home.allPosts)}</a></div>
  <div class="post-list">${c.slice(0,2).map(s).join(``)}</div>
</section>`:``}
`);var h=document.getElementById(`hero`),g=document.getElementById(`field`),_=h.querySelector(`.hero-name`),v=Object.fromEntries([...h.querySelectorAll(`[data-r]`)].map(e=>[e.dataset.r,e])),y=h.querySelector(`.probe`),b=y.querySelector(`.probe-value`),x=null,S=0,C=null;try{x=l(g,{geometry:u.name(_),enabled:a.animations.field,headStart:140,onFrame(e){if(S++,S%6==0&&(v.n.textContent=e.step.toLocaleString(`en-US`)),C&&S%4==0){let{ez:e}=x.probe(C.x,C.y),t=`${e>=0?`+`:`−`}${Math.abs(e).toFixed(3)}`;v.e.textContent=t,b.innerHTML=`E<sub>z</sub> ${t}`}}}),document.fonts.ready.then(()=>x.repaint())}catch(e){console.warn(`Field simulation unavailable:`,e),h.classList.add(`no-sim`)}if(x){let e=e=>{let t=g.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top,inside:e.clientY-t.top<t.height}},t=matchMedia(`(pointer: fine)`).matches;t||(h.querySelector(`.lab-hint`).textContent=`Tap the field to fire a pulse.`),h.addEventListener(`pointermove`,n=>{let r=e(n),i=n.target.closest(`.lab-panel, a, button`);if(!r.inside||i){C=null,x.pointerLeave(),y.classList.remove(`is-on`),h.classList.remove(`has-probe`);return}C=r,n.pointerType===`mouse`&&x.pointerMove(r.x,r.y),t&&(y.style.transform=`translate(${n.clientX}px, ${n.clientY}px)`,y.classList.add(`is-on`),h.classList.add(`has-probe`))}),h.addEventListener(`pointerleave`,()=>{C=null,x.pointerLeave(),y.classList.remove(`is-on`),h.classList.remove(`has-probe`)}),h.addEventListener(`pointerdown`,t=>{if(t.target.closest(`.lab-panel, a, button`))return;let n=e(t);n.inside&&x.fire(n.x,n.y)});let r=[...h.querySelectorAll(`[data-geo]`)];r.forEach(e=>e.addEventListener(`click`,()=>{r.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e)));let t=e.dataset.geo;x.setGeometry(t===`name`?u.name(_):u[t]),_.style.transition=`opacity .5s`,_.style.opacity=t===`name`?`1`:`0.18`}));let i=h.querySelector(`[data-freq]`),a=()=>{let{ghz:e,lambdaMm:t}=x.stats();v.f.textContent=`${e.toFixed(2)} GHz`,v.l.textContent=`${t.toFixed(1)} mm`};v.n.textContent=x.stats().step.toLocaleString(`en-US`),i.addEventListener(`input`,()=>{x.setGHz(Number(i.value)),a()}),a(),document.addEventListener(`motionchange`,()=>!n()&&x.pointerLeave());let o=new URLSearchParams(location.search).get(`geo`);o&&r.find(e=>e.dataset.geo===o)?.click()}addEventListener(`pagehide`,e=>{e.persisted||x?.destroy()});
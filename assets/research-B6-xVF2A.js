const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./polarization-BYe5oDeD.js","./shared-BkRN4mFK.js","./shared-CwD7SX03.css","./stage-oSMx4qEr.js","./cma-BxbU1rwi.js","./canvas-Dh835VUO.js"])))=>i.map(i=>d[i]);
import{g as e,n as t,p as n,t as r,v as i,y as a}from"./shared-BkRN4mFK.js";import{t as o}from"./preload-helper-uBIymjUX.js";var s=a.diagrams.polarization,c=a.diagrams.cma,l=a.research;r(`research`,`
${n({title:l.title,description:l.description,figure:`<figure class="figure">
    <div class="figure-screen"><div id="polarization" class="scene orbit" role="img" aria-label="${i(s.aria)}"></div></div>
    <figcaption>
      <div class="segmented" role="group" aria-label="Polarization">${s.modes.map((e,t)=>`<button type="button" data-pol="${t}" aria-pressed="${t===1}">${i(e)}</button>`).join(``)}</div>
      <span>${i(s.ar)} <b class="mono" data-ar>0.0 dB</b></span>
    </figcaption>
  </figure>`})}

<section class="wrap">
  <div class="current">
    <div><span class="tag hot">${i(l.currentLabel)}</span><h2>${i(l.currentTitle)}</h2></div>
    <p>${i(l.currentDescription)}</p>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${i(l.experienceTitle)}</h2></div>
  ${e(a.experience)}
  <div class="specs">${l.specs.map(e=>`<div class="spec"><b>${i(e.value)}</b><span>${i(e.label)}</span></div>`).join(``)}</div>
</section>

<section class="section section-tight wrap">
  <div class="section-head"><h2>Conferences</h2></div>
  <div class="conferences">${a.conferences.map(e=>`<article class="conference"><h3>${i(e.name)}</h3><p>${i(e.full)}</p><ul>${e.items.map(e=>`<li>${i(e)}</li>`).join(``)}</ul></article>`).join(``)}</div>
</section>

<section class="section wrap">
  <div class="cma-layout">
    <div>
      <h2>${i(l.cmaTitle)}</h2>
      <p>${i(l.cmaDescription)}</p>
    </div>
    <figure class="figure">
      <div class="figure-screen"><div id="cma" class="scene" role="img" aria-label="${i(c.aria)}"></div></div>
      <figcaption>
        <div class="segmented" role="group" aria-label="Characteristic mode">${c.modes.map((e,t)=>`<button type="button" data-mode="${t}" aria-pressed="${t===0}">${i(e)}</button>`).join(``)}</div>
        <span>${i(c.note)}</span>
      </figcaption>
    </figure>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${i(l.interestsTitle)}</h2></div>
  <div class="interests">${a.interests.map(e=>`<article class="interest"><h3>${i(e.title)}</h3><p>${i(e.description)}</p>${e.current?`<p style="margin-top:12px"><span class="tag hot">${i(a.ui.current)}</span></p>`:``}</article>`).join(``)}</div>
</section>
`),t(`polarization`,()=>o(()=>import(`./polarization-BYe5oDeD.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`polarization`),t(`cma`,()=>o(()=>import(`./cma-BxbU1rwi.js`),__vite__mapDeps([4,1,2,5]),import.meta.url),`cma`);
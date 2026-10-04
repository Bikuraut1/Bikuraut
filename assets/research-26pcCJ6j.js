const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./polarization-DnMpeXis.js","./shared-BN5p_FEI.js","./shared-CtYKxauW.css","./stage-DmsuOdwS.js","./cma-CcU7Isai.js","./canvas-JrPaRTez.js"])))=>i.map(i=>d[i]);
import{_ as e,h as t,n,p as r,t as i,v as a}from"./shared-BN5p_FEI.js";import{t as o}from"./preload-helper-uBIymjUX.js";var s=a.diagrams.polarization,c=a.diagrams.cma,l=a.research;i(`research`,`
${r({title:l.title,description:l.description,figure:`<figure class="figure">
    <div class="figure-screen"><div id="polarization" class="scene orbit" role="img" aria-label="${e(s.aria)}"></div></div>
    <figcaption>
      <div class="segmented" role="group" aria-label="Polarization">${s.modes.map((t,n)=>`<button type="button" data-pol="${n}" aria-pressed="${n===1}">${e(t)}</button>`).join(``)}</div>
      <span>${e(s.ar)} <b class="mono" data-ar>0.0 dB</b></span>
    </figcaption>
  </figure>`})}

<section class="wrap">
  <div class="current">
    <div><span class="tag hot">${e(l.currentLabel)}</span><h2>${e(l.currentTitle)}</h2></div>
    <p>${e(l.currentDescription)}</p>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(l.experienceTitle)}</h2></div>
  ${t(a.experience)}
  <div class="specs">${l.specs.map(t=>`<div class="spec"><b>${e(t.value)}</b><span>${e(t.label)}</span></div>`).join(``)}</div>
</section>

<section class="section wrap">
  <div class="cma-layout">
    <div>
      <h2>${e(l.cmaTitle)}</h2>
      <p>${e(l.cmaDescription)}</p>
    </div>
    <figure class="figure">
      <div class="figure-screen"><div id="cma" class="scene" role="img" aria-label="${e(c.aria)}"></div></div>
      <figcaption>
        <div class="segmented" role="group" aria-label="Characteristic mode">${c.modes.map((t,n)=>`<button type="button" data-mode="${n}" aria-pressed="${n===0}">${e(t)}</button>`).join(``)}</div>
        <span>${e(c.note)}</span>
      </figcaption>
    </figure>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(l.interestsTitle)}</h2></div>
  <div class="interests">${a.interests.map(t=>`<article class="interest"><h3>${e(t.title)}</h3><p>${e(t.description)}</p>${t.current?`<p style="margin-top:12px"><span class="tag hot">${e(a.ui.current)}</span></p>`:``}</article>`).join(``)}</div>
</section>
`),n(`polarization`,()=>o(()=>import(`./polarization-DnMpeXis.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`polarization`),n(`cma`,()=>o(()=>import(`./cma-CcU7Isai.js`),__vite__mapDeps([4,1,2,5]),import.meta.url),`cma`);
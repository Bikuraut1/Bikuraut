const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vna-CBYzZ2X8.js","./shared-BDdSibsC.js","./shared-CtYKxauW.css","./canvas-BVPFweUz.js"])))=>i.map(i=>d[i]);
import{_ as e,d as t,g as n,n as r,p as i,t as a,u as o,v as s}from"./shared-BDdSibsC.js";import{t as c}from"./preload-helper-uBIymjUX.js";var l=s.publicationsPage,u=s.diagrams.vna,d=s.publications.filter(e=>e.type===`Journal`).length,f=s.publications.length-d;a(`publications`,`
${i({title:l.title,description:l.description,figure:`<figure class="figure">
    <div class="figure-screen tall-on-phone"><div id="vna" class="scene" role="img" aria-label="${e(u.aria)}"></div></div>
    <figcaption>
      <span>${e(u.frequency)} <b class="mono" data-freq>5.80 GHz</b></span>
      <span>${e(u.reflection)} <b class="mono" data-s11>−39.2 dB</b></span>
    </figcaption>
  </figure>`})}

<section class="wrap" style="padding-bottom: clamp(80px, 10vw, 140px)">
  <div class="pub-tools">
    <div class="segmented" role="group" aria-label="Filter publications">${l.filters.map((t,n)=>`<button type="button" data-filter="${n}" aria-pressed="${n===0}">${e(t)}</button>`).join(``)}</div>
    <label class="search">${n(`search`)}<span class="sr-only">${e(l.searchLabel)}</span><input id="pub-search" type="search" placeholder="${e(l.searchPlaceholder)}" autocomplete="off"></label>
  </div>
  <div class="results-line"><span id="results-count" role="status"></span><span>${d} journal articles, ${f} conference papers. ${e(l.note)}</span></div>
  <div id="pub-list"></div>
</section>
`);var p=document.getElementById(`pub-list`),m=document.getElementById(`pub-search`),h=[...document.querySelectorAll(`[data-filter]`)],g=document.getElementById(`results-count`),_=0;function v(){let n=m.value.trim().toLowerCase(),r=t().filter(e=>(_===0||_===1&&e.type===`Journal`||_===2&&e.type===`Conference`||_===3&&e.firstAuthor)&&[e.title,e.authors.join(` `),e.venue].some(e=>e.toLowerCase().includes(n)));g.textContent=`${r.length} ${r.length===1?`paper`:`papers`}`,p.innerHTML=r.length?r.map(o).join(``):`<div class="empty"><p>${e(l.empty)}</p><button class="button" type="button" id="reset">${e(l.reset)}</button></div>`,document.getElementById(`reset`)?.addEventListener(`click`,()=>{m.value=``,y(0),m.focus()})}function y(e){_=e,h.forEach((t,n)=>t.setAttribute(`aria-pressed`,String(e===n))),v()}h.forEach((e,t)=>e.addEventListener(`click`,()=>y(t))),m.addEventListener(`input`,v),v(),r(`vna`,()=>c(()=>import(`./vna-CBYzZ2X8.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`vna`);
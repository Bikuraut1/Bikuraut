const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vna-YiZXkLrb.js","./shared-BkRN4mFK.js","./shared-CwD7SX03.css","./canvas-Dh835VUO.js"])))=>i.map(i=>d[i]);
import{_ as e,d as t,n,p as r,t as i,u as a,v as o,y as s}from"./shared-BkRN4mFK.js";import{t as c}from"./preload-helper-uBIymjUX.js";var l=s.publicationsPage,u=s.diagrams.vna,d=s.publications.filter(e=>e.type===`Journal`).length,f=s.publications.length-d;i(`publications`,`
${r({title:l.title,description:l.description,figure:`<figure class="figure">
    <div class="figure-screen tall-on-phone"><div id="vna" class="scene" role="img" aria-label="${o(u.aria)}"></div></div>
    <figcaption>
      <span>${o(u.frequency)} <b class="mono" data-freq>5.80 GHz</b></span>
      <span>${o(u.reflection)} <b class="mono" data-s11>−39.2 dB</b></span>
    </figcaption>
  </figure>`})}

<section class="wrap" style="padding-bottom: clamp(80px, 10vw, 140px)">
  <div class="pub-tools">
    <div class="segmented" role="group" aria-label="Filter publications">${l.filters.map((e,t)=>`<button type="button" data-filter="${t}" aria-pressed="${t===0}">${o(e)}</button>`).join(``)}</div>
    <label class="search">${e(`search`)}<span class="sr-only">${o(l.searchLabel)}</span><input id="pub-search" type="search" placeholder="${o(l.searchPlaceholder)}" autocomplete="off"></label>
  </div>
  <div class="results-line"><span id="results-count" role="status"></span><span>${d} journal articles, ${f} conference papers. ${o(l.note)}</span></div>
  <div id="pub-list"></div>
</section>
`);var p=document.getElementById(`pub-list`),m=document.getElementById(`pub-search`),h=[...document.querySelectorAll(`[data-filter]`)],g=document.getElementById(`results-count`),_=0;function v(){let e=m.value.trim().toLowerCase(),n=t().filter(t=>(_===0||_===1&&t.type===`Journal`||_===2&&t.type===`Conference`||_===3&&t.firstAuthor)&&[t.title,t.authors.join(` `),t.venue].some(t=>t.toLowerCase().includes(e)));g.textContent=`${n.length} ${n.length===1?`paper`:`papers`}`,p.innerHTML=n.length?n.map(a).join(``):`<div class="empty"><p>${o(l.empty)}</p><button class="button" type="button" id="reset">${o(l.reset)}</button></div>`,document.getElementById(`reset`)?.addEventListener(`click`,()=>{m.value=``,y(0),m.focus()})}function y(e){_=e,h.forEach((t,n)=>t.setAttribute(`aria-pressed`,String(e===n))),v()}h.forEach((e,t)=>e.addEventListener(`click`,()=>y(t))),m.addEventListener(`input`,v),v(),n(`vna`,()=>c(()=>import(`./vna-YiZXkLrb.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`vna`);
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveguide-Bwmpvmyx.js","./shared-BDdSibsC.js","./shared-CtYKxauW.css","./canvas-BVPFweUz.js"])))=>i.map(i=>d[i]);
import{_ as e,n as t,t as n,v as r}from"./shared-BDdSibsC.js";import{n as i,r as a,t as o}from"./posts-BF5A8mUR.js";import{t as s}from"./preload-helper-uBIymjUX.js";var c=299792458/.0697/1e9,l=r.blogPage,u=[...new Set(a.flatMap(e=>e.tags))];n(`blog`,`
<section class="page-hero wrap solo blog-hero">
  <div class="page-hero-copy">
    <h1>${e(l.title)}</h1>
    <p class="lead">${e(l.description)}</p>
  </div>
  <figure class="figure blog-banner">
    <div class="figure-screen"><div id="waveguide" class="scene" role="img" aria-label="${e(r.diagrams.waveguide.aria)}"></div></div>
    <figcaption><span>TE<sub>10</sub> mode in a WR-137 waveguide. Dots point out of the page, crosses into it.</span><span>Cutoff <b class="mono">${c.toFixed(2)} GHz</b></span></figcaption>
  </figure>
</section>

<section class="wrap blog-index">
  ${u.length?`<div class="segmented tag-filter" role="group" aria-label="Filter posts by topic"><button type="button" data-tag="" aria-pressed="true">All topics</button>${u.map(t=>`<button type="button" data-tag="${e(t)}" aria-pressed="false">${e(t)}</button>`).join(``)}</div>`:``}
  <ol class="post-rows" id="post-rows">
    ${a.length?a.map(t=>`<li class="post-row" data-tags="${e(t.tags.join(`|`))}">
      <a href="${i(t.slug)}">
        <time datetime="${e(t.date)}">${o(t.date)}</time>
        <div>
          <h2>${e(t.title)}</h2>
          <p>${e(t.summary)}</p>
        </div>
        <span class="post-row-meta">${t.minutes} ${e(l.readingTime)}<span class="tags">${t.tags.map(t=>`<span class="tag">${e(t)}</span>`).join(``)}</span></span>
      </a>
    </li>`).join(``):`<li class="empty">${e(l.empty)}</li>`}
  </ol>
</section>
`);var d=[...document.querySelectorAll(`.post-row`)],f=[...document.querySelectorAll(`[data-tag]`)];f.forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.tag;f.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e))),d.forEach(e=>e.hidden=!!t&&!e.dataset.tags.split(`|`).includes(t))})),t(`waveguide`,()=>s(()=>import(`./waveguide-Bwmpvmyx.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`waveguide`);
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveguide-B6oT3J00.js","./shared-BkRN4mFK.js","./shared-CwD7SX03.css","./canvas-Dh835VUO.js"])))=>i.map(i=>d[i]);
import{n as e,t,v as n,y as r}from"./shared-BkRN4mFK.js";import{n as i,r as a,t as o}from"./posts-DJFoAMDA.js";import{t as s}from"./preload-helper-uBIymjUX.js";var c=299792458/.0697/1e9,l=r.blogPage,u=[...new Set(a.flatMap(e=>e.tags))];t(`blog`,`
<section class="page-hero wrap solo blog-hero">
  <div class="page-hero-copy">
    <h1>${n(l.title)}</h1>
    <p class="lead">${n(l.description)}</p>
  </div>
  <figure class="figure blog-banner">
    <div class="figure-screen"><div id="waveguide" class="scene" role="img" aria-label="${n(r.diagrams.waveguide.aria)}"></div></div>
    <figcaption><span>TE<sub>10</sub> mode in a WR-137 waveguide. Dots point out of the page, crosses into it.</span><span>Cutoff <b class="mono">${c.toFixed(2)} GHz</b></span></figcaption>
  </figure>
</section>

<section class="wrap blog-index">
  ${u.length?`<div class="segmented tag-filter" role="group" aria-label="Filter posts by topic"><button type="button" data-tag="" aria-pressed="true">All topics</button>${u.map(e=>`<button type="button" data-tag="${n(e)}" aria-pressed="false">${n(e)}</button>`).join(``)}</div>`:``}
  <ol class="post-rows" id="post-rows">
    ${a.length?a.map(e=>`<li class="post-row" data-tags="${n(e.tags.join(`|`))}">
      <a href="${i(e.slug)}">
        <time datetime="${n(e.date)}">${o(e.date)}</time>
        <div>
          <h2>${n(e.title)}</h2>
          <p>${n(e.summary)}</p>
        </div>
        <span class="post-row-meta">${e.minutes} ${n(l.readingTime)}<span class="tags">${e.tags.map(e=>`<span class="tag">${n(e)}</span>`).join(``)}</span></span>
      </a>
    </li>`).join(``):`<li class="empty">${n(l.empty)}</li>`}
  </ol>
</section>
`);var d=[...document.querySelectorAll(`.post-row`)],f=[...document.querySelectorAll(`[data-tag]`)];f.forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.tag;f.forEach(t=>t.setAttribute(`aria-pressed`,String(t===e))),d.forEach(e=>e.hidden=!!t&&!e.dataset.tags.split(`|`).includes(t))})),e(`waveguide`,()=>s(()=>import(`./waveguide-B6oT3J00.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`waveguide`);
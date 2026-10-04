import{v as e,y as t}from"./shared-BkRN4mFK.js";var n=(e,t)=>`<svg class="antenna-art" viewBox="0 0 400 300" role="img" aria-label="${t}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="art-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(150,170,210,.07)"/></pattern>
      <radialGradient id="art-glow"><stop offset="0" stop-color="#ff6b3d" stop-opacity=".55"/><stop offset="1" stop-color="#ff6b3d" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#art-grid)"/>
    ${e}
  </svg>`,r=(e,t,n)=>`<rect x="${e}" y="${t}" width="${n}" height="${n}" rx="3" fill="#0c1424" stroke="rgba(150,170,210,.35)"/>`,i=(e,t)=>`<circle cx="${e}" cy="${t}" r="16" fill="url(#art-glow)"/><circle cx="${e}" cy="${t}" r="3.2" fill="#ff6b3d"/>`,a=(e,t,n,r=`start`)=>`<text x="${e}" y="${t}" text-anchor="${r}" class="art-label">${n}</text>`,o=(e,t,n,r)=>`<path d="M${e} ${t}L${n} ${r}" stroke="rgba(150,170,210,.45)" stroke-width="1"/>`;function s(){let e=``;for(let t=0;t<5;t++)for(let n=0;n<5;n++){let r=38*(.78-.26*(Math.hypot(t-2,n-2)/2.83)),i=62+38*(t+.5),a=52+38*(n+.5),o=(t+n)%4==0;e+=`<rect class="art-cell${o?` pulse`:``}" style="--d:${(t+n)*.18}s" x="${(i-r/2).toFixed(1)}" y="${(a-r/2).toFixed(1)}" width="${r.toFixed(1)}" height="${r.toFixed(1)}" rx="1.5"/>`}return n(`${r(54,44,206)}${e}${i(166,138)}
     ${o(260,92,284,92)}${a(290,96,`non-uniform cells`)}
     ${o(169,135,284,150)}${a(290,154,`single feed`)}
     ${a(54,272,`0.7λ × 0.7λ × 0.07λ on FR-4`)}`,`Schematic of a non-uniform metasurface antenna with a single feed`)}function c(e,t,n,r=2.3,i=2.2,a=2.8){let o=``;for(let s=0;s<=r*Math.PI*2;s+=.12){let r=i+a*s,c=e+r*Math.cos(s+n),l=t+r*Math.sin(s+n);o+=`${o?`L`:`M`}${c.toFixed(1)} ${l.toFixed(1)}`}return o}function l(){let e=[[152,102,0,`P1`],[248,102,Math.PI/2,`P2`],[248,198,Math.PI,`P3`],[152,198,3*Math.PI/2,`P4`]].map(([e,t,n,r],o)=>`<path class="art-trace" d="${c(e,t,n)}"/><path class="art-trace current" style="--d:${o*.6}s" d="${c(e,t,n)}"/>${i(e,t)}${a(e,t+(t<150?-46:56),r,`middle`)}`).join(``);return n(`${r(100,50,200)}<path d="M200 64V236M114 150H286" stroke="rgba(150,170,210,.18)" stroke-dasharray="3 5"/>${e}
     ${a(100,284,`4 ports, isolation &gt; 25 dB, ECC &lt; 0.001`)}`,`Schematic of a quad-port MIMO antenna with four spiral radiators`)}function u(){let e=``;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let r=160+t*58,i=140+n*58;if(t===0&&n===0)e+=`<rect x="${r-24}" y="${i-24}" width="48" height="48" rx="2" class="art-driven"/><path d="M${r-24} ${i-14}L${r-14} ${i-24}" class="art-cut"/>`;else{let a=40+(t+n+2)%2*6;e+=`<rect class="art-cell pulse" style="--d:${(t+1+(n+1)*3)*.15}s" x="${r-a/2}" y="${i-a/2}" width="${a}" height="${a}" rx="2"/>`}}return n(`${r(55,35,210)}${e}${i(168,148)}
     ${o(186,136,284,128)}${a(290,132,`driven patch`)}
     ${o(240,82,284,66)}${a(290,70,`parasitic cells`)}
     ${a(55,280,`one copper layer`)}`,`Schematic of a driven patch surrounded by parasitic metasurface cells on one layer`)}var d={metasurface:s,mimo:l,parasitic:u},f=e=>t.publications.find(t=>t.id===e.paper);function p(t){return t.images?.prototype?`<img src="${e(t.images.prototype)}" alt="Fabricated prototype: ${e(t.title)}" loading="lazy">`:d[t.illustration]?.()??``}function m(t){return`<a class="project-card" href="./projects.html#${t.id}">
    <div class="project-art">${p(t)}</div>
    <div class="project-card-body">
      <p class="project-period">${e(t.period)}</p>
      <h3>${e(t.title)}</h3>
      <p>${e(t.summary)}</p>
    </div>
  </a>`}function h(n){let r=f(n),i=r?.doi?`https://doi.org/${r.doi}`:``,a=n.images?.results?`<figure class="case-results"><img src="${e(n.images.results)}" alt="Simulated and measured results: ${e(n.title)}" loading="lazy"><figcaption>Simulated and measured results.</figcaption></figure>`:``;return`<article class="case" id="${n.id}">
    <div class="case-head">
      <p class="project-period">${e(n.period)}</p>
      <h2>${e(n.title)}</h2>
      <p class="lead">${e(n.summary)}</p>
    </div>
    <div class="case-grid">
      <figure class="case-figure">
        <div class="case-art">${p(n)}</div>
        <figcaption>${n.images?.prototype?`Fabricated prototype.`:`Schematic illustration, not to scale.`}</figcaption>
      </figure>
      <div class="case-text">
        <h3>The problem</h3><p>${e(n.problem)}</p>
        <h3>The approach</h3><p>${e(n.approach)}</p>
        <h3>The result</h3><p>${e(n.outcome)}</p>
      </div>
    </div>
    <dl class="case-specs">${n.specs.map(t=>`<div><dt>${e(t.value)}</dt><dd>${e(t.label)}</dd></div>`).join(``)}</dl>
    ${a}
    ${r?`<p class="case-paper">${i?`<a class="link" href="${i}" target="_blank" rel="noopener">Read the paper</a>`:`<span class="dim">${t.ui.forthcoming}</span>`} <span class="dim">${e(r.venue)}${r.year&&!r.venue.includes(String(r.year))?`, ${r.year}`:``}</span></p>`:``}
  </article>`}export{h as n,m as t};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./metasurface-Fgg-kxvo.js","./preload-helper-BhiY9GKs.js","./preload-helper-Dzd75d-m.css","./threeScene-DtKR2xU7.js","./metasurfaceLite-G30YaFso.js","./canvas-Bcira116.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,f as r,g as i,h as a,n as o,p as s,r as c,t as l,u,v as d}from"./preload-helper-BhiY9GKs.js";import{t as f}from"./timeline-DMMkBys_.js";var p=i.publications.filter(e=>e.firstAuthor);o(`home`,`
  <section class="home-hero">
    <div class="home-copy">
      <p class="eyebrow page-kicker">${u(i.home.eyebrow)}</p>
      <div class="hero-identity"><div class="profile-portrait motion-item"><img src="${i.photo}" alt="${u(i.photoAlt)}" width="160" height="160" fetchpriority="high"></div><div><p class="identity-name">${u(i.name)}</p><p class="identity-place mono">${u(i.affiliation)}</p></div></div>
      <h1 class="hero-title">${u(i.name.split(` `)[0])} <em>${u(i.name.split(` `).slice(1).join(` `))}.</em></h1>
      <p class="hero-tagline" data-decode>${u(i.tagline)}</p>
      <p class="home-intro">${u(i.intro)}</p>
      <div class="hero-actions"><a class="button primary" href="${i.cv}" download>${a(`download`)}${i.ui.cv}</a><a class="button" href="./publications.html">${i.ui.publications}</a><a class="button" href="./contact.html">${i.ui.contact}</a></div>
      <div class="hero-profiles">${s()}<a class="text-link" href="./research.html">${i.home.exploreResearch}</a></div>
    </div>
    <div class="hero-visual">${e(`metasurface`,i.diagrams.metasurface.aria)}<div class="hero-figure-label mono"><p>${i.home.fieldLabel}</p><p>${i.home.fieldDetail}</p></div></div>
    <a class="hero-scroll mono" href="#directions"><span class="scroll-line" aria-hidden="true"></span>${i.home.scroll}</a>
  </section>
  <div class="metrics-wrap"><div class="container metrics">${i.metrics.map(e=>`<div class="metric"><span class="metric-value" data-count="${e.value}">${e.value}</span><span class="metric-label">${e.label}</span></div>`).join(``)}</div></div>
  <section id="directions" class="section container">${n(i.home.interestsEyebrow,i.home.interestsTitle)}<div class="interests-grid">${r()}</div></section>
  <section class="section workflow-section"><div class="container">${n(i.home.workflowEyebrow,i.home.workflowTitle)}<p class="section-intro">${i.home.workflowIntro}</p><div class="workflow" data-transmission><svg class="workflow-rail" viewBox="0 0 1000 24" preserveAspectRatio="none" aria-hidden="true"><path class="rail" d="M0 12h1000"/><path class="signal-path" d="M0 12h1000"/></svg>${i.workflow.map(e=>`<article class="workflow-stage"><div class="workflow-icon">${a(e.icon)}</div><h3>${e.title}</h3><p class="mono">${e.detail}</p><p>${e.description}</p></article>`).join(``)}</div></div></section>
  <section class="section container">${n(i.home.featuredEyebrow,i.home.featuredTitle,`<a class="text-link" href="./publications.html">${i.home.allPublications}</a>`)}<div class="featured-publications">${p.map((e,n)=>t(e,n,!0)).join(``)}</div><p class="featured-note">${i.home.publicationNote}</p></section>
`),c(`metasurface`,()=>l(d?()=>import(`./metasurfaceLite-G30YaFso.js`):()=>import(`./metasurface-Fgg-kxvo.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),`metasurface`),f(document.querySelector(`main`),{enabled:i.animations.timeline});
//# sourceMappingURL=index-kyZvPVkZ.js.map
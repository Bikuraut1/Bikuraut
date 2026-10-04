import{t as e,v as t,y as n}from"./shared-BkRN4mFK.js";import{n as r}from"./projects-Df1N0ssQ.js";e(`projects`,`
<section class="page-hero wrap solo">
  <div class="page-hero-copy">
    <h1>Projects</h1>
    <p class="lead">Each project starts as a field picture from characteristic mode analysis, becomes a full-wave model, and ends as an FR-4 board on the network analyser.</p>
    <nav class="project-index" aria-label="Projects on this page">
      ${n.projects.map(e=>`<a class="tag" href="#${e.id}">${t(e.title)}</a>`).join(``)}
    </nav>
  </div>
</section>
<div class="wrap" style="padding-bottom: clamp(64px, 8vw, 120px)">
  ${n.projects.map(r).join(``)}
</div>
`);
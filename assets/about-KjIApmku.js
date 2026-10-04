const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./radiation-BrnrnNKz.js","./shared-BkRN4mFK.js","./shared-CwD7SX03.css","./stage-oSMx4qEr.js"])))=>i.map(i=>d[i]);
import{_ as e,g as t,h as n,n as r,p as i,t as a,v as o,y as s}from"./shared-BkRN4mFK.js";import{t as c}from"./preload-helper-uBIymjUX.js";var l=s.diagrams.radiation,u=s.about,d=s.name.split(` `).map(e=>e[0]).join(``);a(`about`,`
${i({title:u.title,description:u.description,figure:`<figure class="figure">
    <div class="figure-screen"><div id="radiation" class="scene orbit" role="img" aria-label="${o(l.aria)}"></div></div>
    <figcaption>
      <span>Far-field pattern: <b data-pattern>${o(l.shapes[0])}</b></span>
      <span class="gain-key"><span>${o(l.legend)}</span><span class="gain-bar" aria-hidden="true"></span><span class="mono">${l.range[0]} to ${l.range[3]}</span></span>
      <span>${o(l.hint)}</span>
    </figcaption>
  </figure>`})}

<section class="section wrap">
  <div class="bio">
    <div class="portrait">
      <span class="initials" aria-hidden="true">${o(d)}</span>
      <img src="${s.photo}" alt="${o(s.photoAlt)}" width="640" height="800" loading="lazy" onerror="this.remove()">
    </div>
    <div class="bio-text">
      ${n(`about-status`)}
      <h2>${o(u.bioTitle)}</h2>
      ${u.paragraphs.map(e=>`<p>${o(e)}</p>`).join(``)}
      <div class="intro-actions">
        <a class="button solid" href="${s.cv}" download>${e(`download`)}${o(s.ui.cv)}</a>
        <a class="button" href="./contact.html">${o(s.ui.contact)}</a>
      </div>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${o(s.home.workflowTitle)}</h2><p>${o(s.home.workflowText)}</p></div>
  <div class="workflow" role="list">
    <span class="workflow-line" aria-hidden="true"></span>
    ${s.workflow.map((e,t)=>`<div class="step" role="listitem"><span class="step-no">${String(t+1).padStart(2,`0`)}</span><h3>${o(e.title)}</h3><p class="tools">${o(e.tools)}</p><p>${o(e.description)}</p></div>`).join(``)}
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${o(u.educationTitle)}</h2></div>
  ${t(s.education)}
</section>

<section class="section wrap">
  <div class="section-head"><h2>${o(u.skillsTitle)}</h2></div>
  <div class="skills">${s.skills.map(e=>`<div class="skill"><h3>${o(e.group)}</h3><ul>${e.items.map(e=>`<li>${o(e)}</li>`).join(``)}</ul></div>`).join(``)}</div>
  <p class="languages"><b>${o(u.languagesTitle)}</b>: ${u.languages.map(o).join(`, `)}</p>
</section>
`),r(`radiation`,()=>c(()=>import(`./radiation-BrnrnNKz.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`radiation`);
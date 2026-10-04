const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./radiation-DqRd8och.js","./shared-BDdSibsC.js","./shared-CtYKxauW.css","./stage-BwEPdala.js"])))=>i.map(i=>d[i]);
import{_ as e,g as t,h as n,n as r,p as i,t as a,v as o}from"./shared-BDdSibsC.js";import{t as s}from"./preload-helper-uBIymjUX.js";var c=o.diagrams.radiation,l=o.about,u=o.name.split(` `).map(e=>e[0]).join(``);a(`about`,`
${i({title:l.title,description:l.description,figure:`<figure class="figure">
    <div class="figure-screen"><div id="radiation" class="scene orbit" role="img" aria-label="${e(c.aria)}"></div></div>
    <figcaption>
      <span>Far-field pattern: <b data-pattern>${e(c.shapes[0])}</b></span>
      <span class="gain-key"><span>${e(c.legend)}</span><span class="gain-bar" aria-hidden="true"></span><span class="mono">${c.range[0]} to ${c.range[3]}</span></span>
      <span>${e(c.hint)}</span>
    </figcaption>
  </figure>`})}

<section class="section wrap">
  <div class="bio">
    <div class="portrait">
      <span class="initials" aria-hidden="true">${e(u)}</span>
      <img src="${o.photo}" alt="${e(o.photoAlt)}" width="640" height="800" loading="lazy" onerror="this.remove()">
    </div>
    <div class="bio-text">
      <h2>${e(l.bioTitle)}</h2>
      ${l.paragraphs.map(t=>`<p>${e(t)}</p>`).join(``)}
      <div class="intro-actions">
        <a class="button solid" href="${o.cv}" download>${t(`download`)}${e(o.ui.cv)}</a>
        <a class="button" href="./contact.html">${e(o.ui.contact)}</a>
      </div>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(l.educationTitle)}</h2></div>
  ${n(o.education)}
</section>

<section class="section wrap">
  <div class="section-head"><h2>${e(l.skillsTitle)}</h2></div>
  <div class="skills">${o.skills.map(t=>`<div class="skill"><h3>${e(t.group)}</h3><ul>${t.items.map(t=>`<li>${e(t)}</li>`).join(``)}</ul></div>`).join(``)}</div>
  <p class="languages"><b>${e(l.languagesTitle)}</b>: ${l.languages.map(e).join(`, `)}</p>
</section>
`),r(`radiation`,()=>s(()=>import(`./radiation-DqRd8och.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),`radiation`);
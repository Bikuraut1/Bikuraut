import{_ as e,f as t,g as n,m as r,t as i,v as a}from"./shared-BDdSibsC.js";import{n as o,t as s}from"./geometries-Ck5bflt8.js";var c=a.contact;i(`contact`,`
<section class="contact-page">
  <div class="contact-field" id="contact-field" role="img" aria-label="Live simulation of a plane wave diffracting through two slits"></div>
  <div class="contact-inner wrap">
    <h1>${e(c.title)}</h1>
    <dl class="contact-grid">
      <div>
        <dt>${e(c.emailLabel)}</dt>
        <dd class="email-row"><a class="link" href="mailto:${e(a.email)}">${e(a.email)}</a><button class="icon-button" type="button" id="copy-email" aria-label="${e(a.ui.copyEmail)}" title="${e(a.ui.copyEmail)}">${n(`copy`)}</button></dd>
      </div>
      <div><dt>${e(c.locationLabel)}</dt><dd>${e(a.location)}</dd></div>
      <div><dt>${e(c.profilesLabel)}</dt><dd>${r()}</dd></div>
      ${a.phone?`<div><dt>Phone</dt><dd>${e(a.phone)}</dd></div>`:``}
    </dl>
    <p class="contact-note">${e(c.description)} ${e(c.references)}</p>
    <p class="contact-note dim" id="field-hint">${e(c.fieldHint)}</p>
  </div>
</section>
`),document.getElementById(`copy-email`).addEventListener(`click`,()=>t(a.email,a.ui.emailCopied));var l=document.querySelector(`.contact-page`),u=document.getElementById(`contact-field`);innerHeight>innerWidth*1.05&&(document.getElementById(`field-hint`).textContent=`Two coherent sources interfering, simulated live. Tap to fire a pulse.`);try{let e=o(u,{geometry:s.contact,enabled:a.animations.field,headStart:160,gain:2.8});addEventListener(`pagehide`,t=>{t.persisted||e.destroy()});let t=e=>{let t=u.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]};l.addEventListener(`pointermove`,n=>{if(n.pointerType!==`mouse`||n.target.closest(`.contact-grid, a, button`))return e.pointerLeave();e.pointerMove(...t(n))}),l.addEventListener(`pointerleave`,()=>e.pointerLeave()),l.addEventListener(`pointerdown`,n=>{n.target.closest(`.contact-grid, a, button`)||e.fire(...t(n))})}catch(e){console.warn(`Field simulation unavailable:`,e)}
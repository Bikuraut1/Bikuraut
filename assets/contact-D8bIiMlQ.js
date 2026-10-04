import{_ as e,f as t,h as n,m as r,t as i,v as a,y as o}from"./shared-BkRN4mFK.js";import{n as s,t as c}from"./geometries-Bt2AIZ4C.js";var l=o.contact;i(`contact`,`
<section class="contact-page">
  <div class="contact-field" id="contact-field" role="img" aria-label="Live simulation of a plane wave diffracting through two slits"></div>
  <div class="contact-inner wrap">
    ${n(`contact-status`)}
    <h1>${a(l.title)}</h1>
    <dl class="contact-grid">
      <div>
        <dt>${a(l.emailLabel)}</dt>
        <dd class="email-row"><a class="link" href="mailto:${a(o.email)}">${a(o.email)}</a><button class="icon-button" type="button" id="copy-email" aria-label="${a(o.ui.copyEmail)}" title="${a(o.ui.copyEmail)}">${e(`copy`)}</button></dd>
      </div>
      <div><dt>${a(l.locationLabel)}</dt><dd>${a(o.location)}</dd></div>
      <div><dt>${a(l.profilesLabel)}</dt><dd>${r()}</dd></div>
      ${o.phone?`<div><dt>Phone</dt><dd>${a(o.phone)}</dd></div>`:``}
    </dl>
    <p class="contact-note">${a(l.description)} ${a(l.references)}</p>
    <p class="contact-note dim" id="field-hint">${a(l.fieldHint)}</p>
  </div>
</section>
`),document.getElementById(`copy-email`).addEventListener(`click`,()=>t(o.email,o.ui.emailCopied));var u=document.querySelector(`.contact-page`),d=document.getElementById(`contact-field`);innerHeight>innerWidth*1.05&&(document.getElementById(`field-hint`).textContent=`Two coherent sources interfering, simulated live. Tap to fire a pulse.`);try{let e=s(d,{geometry:c.contact,enabled:o.animations.field,headStart:160,gain:2.8});addEventListener(`pagehide`,t=>{t.persisted||e.destroy()});let t=e=>{let t=d.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]};u.addEventListener(`pointermove`,n=>{if(n.pointerType!==`mouse`||n.target.closest(`.contact-grid, a, button`))return e.pointerLeave();e.pointerMove(...t(n))}),u.addEventListener(`pointerleave`,()=>e.pointerLeave()),u.addEventListener(`pointerdown`,n=>{n.target.closest(`.contact-grid, a, button`)||e.fire(...t(n))})}catch(e){console.warn(`Field simulation unavailable:`,e)}
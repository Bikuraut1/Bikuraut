import{v as e,y as t}from"./shared-BkRN4mFK.js";import{n,t as r}from"./posts-DJFoAMDA.js";var i=i=>`<a class="post-card" href="${n(i.slug)}">
  <span class="post-meta"><time datetime="${e(i.date)}">${r(i.date)}</time><span>${i.minutes} ${t.blogPage.readingTime}</span></span>
  <h3>${e(i.title)}</h3>
  <p>${e(i.summary)}</p>
  <span class="tags">${i.tags.map(t=>`<span class="tag">${e(t)}</span>`).join(``)}</span>
</a>`;export{i as t};
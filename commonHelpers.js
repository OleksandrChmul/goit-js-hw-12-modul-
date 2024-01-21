import{S as d,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="41779008-0ca907175e945c15bd83f3619",h="https://pixabay.com/api/";async function y(n,o=1){const t=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${h}?${t}`;return fetch(i).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})}const a={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};function g(n){const o=n.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:f})=>`
          <li>
      <a href="${i}">
        <img src="${t}" alt="${e}" />
        <div class="gallery-list-info">
          <p>likes: ${r}</p>
          <p>views: ${s}</p>
          <p>comments: ${u}</p>
          <p>downloads: ${f}</p>
        </div>
      </a>
    </li>`).join("");a.galleryList.insertAdjacentHTML("afterbegin",o)}function p(){a.galleryList.innerHTML=""}const L=new d(".gallery-list a",{captionsData:"alt",captionDelay:250});function c(){a.loader.classList.add(".hide")}function S(){a.loader.classList.remove(".hide")}function b(n){n.preventDefault(),p(),S();const o=a.searchForm.elements.searchQuery.value.trim();o||(l.info({title:"Info",message:"Enter search parameters"}),c()),y(o).then(({hits:t})=>{if(t.length===0){l.error({title:"Error",titleSize:"24px",titleColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t),L.refresh()}).catch(t=>{console.log(t),l.error({title:"Error",message:"something went wrong, try again"})}).finally(()=>{c()})}a.searchForm.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map

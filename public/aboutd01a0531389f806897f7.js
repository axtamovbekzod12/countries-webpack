(()=>{var n={16:()=>{const n=document.querySelector(".header__dark-mode"),e=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var t=e[s]={exports:{}};return n[s](t,t.exports,a),t.exports}(()=>{"use strict";a(16);const n=document.querySelector(".loader"),e=e=>e?n.classList.remove("hidden"):n.classList.add("hidden"),s=(document.querySelector(".cards"),document.querySelector(".country-info")),o=window.location.search;(async n=>{e(!0);const a=await fetch(n);if(!a.ok)throw e(!1),new Error("Something went wrong :(");const s=await a.json();return e(!1),s})(`https://restcountries.com/v3.1/name/${new URLSearchParams(o).get("country")}`).then((n=>(n=>{const{population:e,borders:a,capital:o,flags:t,name:r,region:c,tld:i,currencies:l,languages:p,subregion:d}=n,u=Object.values(r.nativeName)[0].official,m=Object.values(l)[0].name,g=Object.values(p);s.innerHTML=`\n            <img class="country-info__img" src=${t.svg} alt="germany-flag" width="560" height="400"/>\n            <div class="country-info__content">\n              <h2>${r.common}</h2>\n              <ul class="country-info__list">\n                <li class="country-info__item">\n                  <p class="name">Native Name: <span>${u}</span></p>\n                  <p class="population">Population: <span>${e}</span></p>\n                  <p class="region">Region: <span>${c}</span></p>\n                  <p class="sub-region">Sub Region: <span>${d}</span></p>\n                  <p class="capital">Capital: <span>${o}</span></p>\n                </li>\n                <li class="country-info__item">\n                  <p class="name">Top Level Domain: <span>${i}</span></p>\n                  <p class="population">Currencies: <span>${m}</span></p>\n                  <p class="region">Languages: <span>${g}</span></p>\n                </li>\n              </ul>\n  \n              <div class="country-info__borders">\n                <h3>Border Countries:</h3>\n                ${a?a.map((n=>`<a href="#">${n}</a>`)):"No Borders"}\n              </div>\n            </div>\n    `})(n[0]))).catch((n=>alert(n.message)))})()})();
(()=>{"use strict";(()=>{const e=document.getElementById("header-btn-modal"),t=document.getElementById("callback"),l=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-close"),n=document.querySelectorAll("div.element.relative");function d(){t.style.display="block",l.style.display="block"}function o(){t.style.display="none",l.style.display="none"}document.getElementById("callHelp").addEventListener("click",(()=>d())),n.forEach((e=>e.addEventListener("click",(()=>d())))),e.addEventListener("click",(()=>d())),c.addEventListener("click",(()=>o())),l.addEventListener("click",(()=>o()))})(),(()=>{const e=document.querySelectorAll(".slide-item");let t,l=0;t=setInterval((()=>{e[l].classList.remove("active"),l++,l>=e.length&&(l=0),e[l].classList.add("active")}),3e3)})(),(()=>{const e=document.querySelector(".services-elements");console.log(e)})()})();
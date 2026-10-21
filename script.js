const WA="27000000000"; // her WhatsApp number: country code first, no + or spaces
const real=WA!=="27000000000";
document.querySelectorAll("[data-wa]").forEach(a=>{if(real)a.href="https://wa.me/"+WA+"?text="+encodeURIComponent("Hi, I saw your website and would like to make an enquiry.")});
document.querySelectorAll("[data-call]").forEach(a=>{if(real)a.href="tel:+"+WA});
if(real)document.querySelectorAll(".num").forEach(n=>n.textContent="+"+WA.replace(/^(\d{2})(\d{2})(\d{3})(\d{4})$/,"$1 $2 $3 $4"));
const menu=document.querySelector(".menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>menu.setAttribute("aria-expanded",nav.classList.toggle("open")));
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");menu.setAttribute("aria-expanded",false)}});
const tabs=document.querySelectorAll(".tabs button"),shots=document.querySelectorAll(".shot");
tabs.forEach(b=>b.addEventListener("click",()=>{tabs.forEach(x=>x.setAttribute("aria-pressed",x===b));
  shots.forEach(s=>s.hidden=!(b.dataset.f==="all"||s.dataset.c===b.dataset.f))}));
document.getElementById("yr").textContent=new Date().getFullYear();
const sl=[...document.querySelectorAll(".slides img")],cap=document.getElementById("cap");let si=0;
function show(i){sl.forEach((s,k)=>s.classList.toggle("on",k===i));cap.textContent=sl[i].dataset.cap}
show(0);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(()=>{si=(si+1)%sl.length;show(si)},4500);

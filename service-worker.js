if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let c={};const u=e=>i(e,s),d={module:{uri:s},exports:c,require:u};n[s]=Promise.all(r.map((e=>d[e]||u(e)))).then((e=>(l(...e),c)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"073e31dd123514f85c7b.png",revision:null},{url:"296cb29ec3edd79b1bc0.jpeg",revision:null},{url:"6fa61dcf330b8bc75331.jpeg",revision:null},{url:"847bee4afc078dca6c61.mp3",revision:null},{url:"959da609670bd620d8d0.jpeg",revision:null},{url:"96d77af19975a317524f.png",revision:null},{url:"9ca598aa2ea1480a7924.png",revision:null},{url:"a72f63a0f74cee0fddfa.png",revision:null},{url:"be8e48d697fb8fa3da0e.png",revision:null},{url:"cc4d20f1b61489956cc4.jpeg",revision:null},{url:"fdb8bdfe0fa6aa451526.png",revision:null},{url:"index.html",revision:"a0585ab65b3065cc525be5925dbdab7a"},{url:"main.css",revision:"253b8e250f1486c26cf84b7731660359"},{url:"main.js",revision:"fc69974bc6a4c4025e60559352b5527d"},{url:"main.js.LICENSE.txt",revision:"85bdd68267e3e38b6ee4773a0a1cbed6"},{url:"typewriter.mp3",revision:"2d6b40ba6c8c91779ed674cdf7f2822d"}],{})}));

const t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},{bodyEl:e,startBtn:d,stopBtn:r}=t;d.addEventListener("click",(function(){d.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),r.addEventListener("click",(function(){clearInterval(a),d.removeAttribute("disabled"),r.setAttribute("disabled","disabled")}));let a=null;r.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.23a7f1cd.js.map

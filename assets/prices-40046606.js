const s=document.querySelectorAll(".element");s.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.add("hoverable")}),e.addEventListener("mouseout",()=>{e.classList.remove("hoverable")})});

import"./modulepreload-polyfill-ec808ebb.js";const n=document.querySelector(".captcha"),i=document.querySelector(".reload-btn"),c=document.querySelector(".capcha-input"),u=document.querySelector(".register-button"),e=document.querySelector(".status-text");let r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function a(){for(let t=0;t<6;t++){let o=r[Math.floor(Math.random()*r.length)];n.innerText+=` ${o}`}}a();i.addEventListener("click",()=>{l(),a()});u.addEventListener("click",t=>{t.preventDefault(),e.style.display="block",c.value.split("").join(" ")==n.innerText?(e.style.color="#4db2ec",e.innerText="Nice! You don't appear to be a robot.",setTimeout(()=>{l(),a()},2e3)):(e.style.color="#000000",e.innerText="Captcha not matched. Please try again!")});function l(){c.value="",n.innerText="",e.style.display="none"}

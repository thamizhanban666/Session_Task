let f = document.createElement("form");
document.getElementById("div").appendChild(f);
f.setAttribute("id","form");

let email = document.createElement("input");
email.setAttribute("type","text");
email.setAttribute("placeholder","Enter Your email")
email.setAttribute("required","true");
document.getElementById("form").appendChild(email);

let br= document.createElement("br");
document.getElementById("form").appendChild(br);

let pword = document.createElement("input");
pword.setAttribute("type","password");
pword.setAttribute("placeholder","Enter Your Password")
pword.setAttribute("required","true");
document.getElementById("form").appendChild(pword);

let br2= document.createElement("br");
document.getElementById("form").appendChild(br2);

let cpword = document.createElement("input");
cpword.setAttribute("type","password");
cpword.setAttribute("placeholder","confirm Your Password");
cpword.setAttribute("required","true");
document.getElementById("form").appendChild(cpword);

let br3= document.createElement("br");
document.getElementById("form").appendChild(br3);

let mob = document.createElement("input");
mob.setAttribute("type","tel");
mob.setAttribute("placeholder","Enter Your MobileNo.");
mob.setAttribute("required","true");
document.getElementById("form").appendChild(mob);

let br4= document.createElement("br");
document.getElementById("form").appendChild(br4);

let div2 = document.createElement("div");
div2.setAttribute("id","div2");
document.body.appendChild(div2);

let btn = document.createElement("button");
// btn.setAttribute("type","submit");
// btn.setAttribute("value","Button");
btn.innerText="Click Me"
document.getElementById("div2").appendChild(btn);

let div3 = document.createElement("div");
div3.setAttribute("id","div3");
document.body.appendChild(div3);

btn.addEventListener("click",()=>{
 document.getElementById("div3").innerHTML= `${email.value} <br> ${mob.value}`; 
 })
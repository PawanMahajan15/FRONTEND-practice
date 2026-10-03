var txt=document.querySelector("#txt");
var count=document.querySelector("span");
txt.addEventListener("input",function(){
    count.textContent= txt.value.length;
})
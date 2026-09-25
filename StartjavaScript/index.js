var btn1=document.querySelector("button");
var p=document.querySelector("p")
var btn2=document.querySelector("#btn2");
var img1=document.querySelector("#img1");
var img2=document.querySelector("#img2");
var inps=document.querySelectorAll("input[type=text]")
var submit=document.querySelector("#submit");
var h3=document.querySelector("h3");
var form=document.querySelector("form");
var ul=document.querySelector("ul");
var add=document.querySelector("#btn5");
var remove=document.querySelector("#remove");
var inps1=document.querySelector("#inps1");
var li;
var timer=document.querySelector("#timer");
var start=document.querySelector("#start");
var stop=document.querySelector("#stop");
var int;

btn1.addEventListener("click",function(){
    p.textContent=("hello guys");
})
btn2.addEventListener("click",function(){
  var src1=img1.src;
    var src2=img2.src;
    img1.src=src2;
    img2.src=src1;
})
form.addEventListener("submit",function(ev){
 ev.preventDefault();
 for(var i=0;i<inps.length;i++){
   if(inps[i].value.trim()==''){
    h3.textContent="error.some fileds are blank";
    h3.style.color="red";
    break;
   }else{
    h3.textContent="";
   }
 }
})
add.addEventListener("click",function(){
  if(inps1.value==''){}
  else{
    li=document.createElement("li");
    li.textContent= inps1.value;
    ul.appendChild(li);
    inps1.value="";
  }
})
remove.addEventListener("click",function(){
  ul.removeChild(li);
})
start.addEventListener("click",function(){
  var v=0;
  int=setInterval(function(){
    timer.textContent=v;
    v++;
  },1000)
})
stop.addEventListener("click",function(){
  clearInterval(int);
})
var tabs=document.querySelectorAll(".tab");
var contents=document.querySelectorAll("h3");

 contents[0].style.display="block";
 
 tabs.forEach(function(tab,index){
    tab.addEventListener("click",function(){
        hideAll();
        contents[index].style.display="block";
    });
 });
 function hideAll(){
    contents.forEach(function(h3){
        h3.style.display="none";
    })
 }

 var text=document.querySelector("#text");
 var download=document.querySelector("#download");
 var prog=document.querySelector("#progress");

 
    var count =0;
   var int= setInterval(function(){
        if(count==100){
            text.style.opacity=1;
             clearInterval(int);
        }
        prog.style.width=count + '%';
        count++;
    },100)
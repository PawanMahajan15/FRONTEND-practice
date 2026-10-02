var data=[{name:"harshita",src:"https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D"}, 
          {name:"harsh",src:"https://images.unsplash.com/photo-1627087820883-7a102b79179a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D"},
          {name:"harshika",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"},
          {name:"virat",src:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"}
        ]
var pers="";

data.forEach(function(elem){
    pers+=` <div id="person">
               <div id="image">
               <img src="${elem.src}"  alt="">
               </div>
               <h3>${elem.name}</h3>
            </div>`
})
document.querySelector("#peoples").innerHTML=pers;

var input=document.querySelector("input");

input.addEventListener("input",function(){
    var matching=data.filter(function(e){
        return e.name.startsWith(input.value);
    })

    var newusers="";
    matching.forEach(function(elem){
    newusers+=` <div id="person">
               <div id="image">
               <img src="${elem.src}"  alt="">
               </div>
               <h3>${elem.name}</h3>
            </div>`
})
document.querySelector("#peoples").innerHTML=newusers;
})
"use strict";

 // MESQ 1


// let button=document.querySelector("button");
// let gallery=document.querySelector(".gallery");
// let wait=document.querySelector(".pp");
// let i=0;
// button.onclick=function(){
//     wait.classList.remove("d-none");
//     let http=new XMLHttpRequest;
//     http.onreadystatechange=function(){

//         if(http.readyState===4 && http.status===200 )
//         {
//             gallery.innerHTML="";
//             i=0;
//              let data=JSON.parse(http.responseText);
//              data.forEach(element => {
//                  let col=document.createElement("div");
//                  col.className="col-4";
//                  let p=document.createElement("p");
//                  let img=document.createElement("img");
//                  p.innerText=element.title;
//                  img.src=element.url;
//                  col.appendChild(p);
//                  col.appendChild(img);
//                  i++;
//                  if(i>10){return;};
//                  gallery.appendChild(col);
//                  wait.classList.add("d-none");


                 
//              });
//         }
//     }
//     http.open("GET","https://jsonplaceholder.typicode.com/photos");
//     http.send();
// }


//  MESQ 2

let table=document.querySelector("table");
let thead=document.querySelector("thead");
let tbody=document.querySelector("tbody");
let button2=document.querySelector("button");
let h1=document.querySelector("h1");

button2.onclick=function(){
    h1.classList.remove("d-none");
    let http2=new XMLHttpRequest;
    http2.onreadystatechange=function(){
        if(http2.readyState===4 && http2.status===200){

            let allInfo=JSON.parse(http2.responseText);
            allInfo.forEach(info => {
                let tr=document.createElement("tr");
                let td=document.createElement("td");
                let tdname=document.createElement("td");
                let tdusernamename=document.createElement("td");
                let tdemail=document.createElement("td");
                td.innerText=info.id;
                tdname.innerText=info.name;
                tdusernamename.innerText=info.username;
                tdemail.innerText=info.email;
                tr.appendChild(td);
                tr.appendChild(tdname);
                tr.appendChild(tdusernamename);
                tr.appendChild(tdemail);
                let adr=info.address;
                for(let el in adr){
                   
                    
                    let tdadr=document.createElement("td");
                    tdadr.innerText=adr[el];
                    tr.appendChild(tdadr);}

                
                tbody.appendChild(tr);
                h1.classList.add("d-none");
                
            });

        }
    }
    http2.open("GET","https://jsonplaceholder.typicode.com/users");
    http2.send();
}


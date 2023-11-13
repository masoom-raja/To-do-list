//selecting elements
let inputbox=document.getElementById("input-box");
let list=document.getElementById("list-container");

//functon for append to-do list
function addlist(){
    if(inputbox.value ===""){
        alert("you have not write anything")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    savedata();
}
//function for checked list and remove list
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},true)
//for saving data in localstorage
function savedata(){
    localStorage.setItem("data",list.innerHTML)
}
//for getting data from localstorage and display on the website
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
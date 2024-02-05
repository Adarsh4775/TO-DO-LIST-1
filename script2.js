let inputBox = document.getElementById("inputBox");

let listContainer = document.getElementById("list-container");


function addTask(){

    if(inputBox.value === "")
    {
        alert("Please write something inside the Input Box");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listContainer.addEventListener("click",function(event){

    if(event.target.tagName === "LI")
    {
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function letItem(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}

letItem();

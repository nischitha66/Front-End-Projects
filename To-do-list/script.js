const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===''){
        alert("make your to-do list yo!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');      //
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }   else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
var taskName = document.getElementById("taskName");
var addBtn = document.getElementById("addBtn");
var taskList = document.querySelector(".tasks");

addBtn.onclick = addTask;

function addTask() {
    var task = taskName.value;
    
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "task");
    
    var tName = document.createElement("p");
    tName.innerHTML = task;
    newDiv.appendChild(tName);

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "image-container");
    newDiv.appendChild(imgDiv);

    var addImg = document.createElement("img");
    addImg.setAttribute("src", "true.png");
    addImg.setAttribute("onclick", "doneTask(this)");
    addImg.setAttribute("id", "true");
    addImg.setAttribute("alt", "true");
    imgDiv.appendChild(addImg);

    var remImg = document.createElement("img");
    remImg.setAttribute("src", "false.png");
    remImg.setAttribute("onclick", "removeTask(this)");
    remImg.setAttribute("id", "false");
    remImg.setAttribute("alt", "false");
    imgDiv.appendChild(remImg);

    taskList.appendChild(newDiv); 
}

function doneTask(element) {
    var taskDiv = element.closest(".task");
    taskDiv.style.backgroundColor = "green";

}

function removeTask(element) {
    var taskDiv = element.closest(".task");
    taskDiv.remove();
}

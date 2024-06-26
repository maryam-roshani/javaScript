const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add')
let taskList = document.getElementById("task-list")

function addTask() {
    if (taskInput.value !== "") {
        let newTask = document.createElement('li')
        newTask.innerHTML = taskInput.value
        taskList.appendChild(newTask)
        let image = document.createElement('img')
        image.src = 'assets/x.svg';
        newTask.appendChild(image)
    }
    taskInput.value = "";
    saveData()

}



addButton.addEventListener('click', addTask)

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data")
}

showTask();
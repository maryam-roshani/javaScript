const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add')
let taskList = document.getElementById("task-list")

function addTask() {
    if (taskInput.value !== "") {
        console.log(taskInput.value)
        let newTask = document.createElement('li')
        let taskDef = document.createElement('p')
        taskDef.innerText = taskInput.value
        taskList.appendChild(newTask).appendChild(taskDef)
    }
}



addButton.addEventListener('click', addTask)
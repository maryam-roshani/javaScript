taskInput = document.getElementById('task-input')
addButton = document.getElementById('add')

function addTask() {
    if (taskInput.value !== "") {
        console.log(taskInput.value)
        const newDiv = document.createElement('div')
        newDiv.className = "flex justify-start align-items-center"
        const newLabel = document.createElement('label')
        newLabel.className = "relative flex items-center p-1 rounded-full cursor-pointer my-auto"
        newLabel.htmlFor = "checkbox"
        taskInput.value = ""
        const newInput = document.createElement('input')
        newInput.className = "peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-orange-600 checked:bg-orange-600 checked:before:bg-orange-600 hover:before:opacity-10"
        newInput.setAttribute('id', 'checkbox')
        const newSpan = document.createElement('span')
        newSpan.className = "absolute text-white transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
    }
}


addButton.addEventListener('click', addTask)
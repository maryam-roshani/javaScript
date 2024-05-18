const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add')
const taskList = document.getElementById("task-list")

function addTask() {
    if (taskInput.value !== "") {
        console.log(taskInput.value)

        const div1 = document.createElement("div")
        div1.className = "flex justify-between gap-2"
        const newDiv = document.createElement('div')
        newDiv.className = "flex justify-start align-items-center"
        const newLabel = document.createElement('label')
        newLabel.className = "relative flex items-center p-1 rounded-full cursor-pointer my-auto"
        newLabel.htmlFor = "checkbox"
        taskInput.value = ""
        const newInput = document.createElement('input')
        newInput.className = "peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-orange-600 checked:bg-orange-600 checked:before:bg-orange-600 hover:before:opacity-10"
            // newInput.setAttribute('id', 'checkbox')
        const newSpan = document.createElement('span')
        newSpan.className = "absolute text-white transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
        let ns = "http://www.w3.org/2000/svg"
        let path = document.createElementNS(ns, "path")
        let svg = document.createElementNS(ns, "svg");
        svg.className = "h-3.5 w-3.5"
        svg.setAttribute("viewBox", "0 0 20 20")
        svg.setAttribute("fill", "currentColor")
        svg.setAttribute("stroke", "currentColor")
        svg.setAttribute("stroke-width", "1")
        path.setAttribute("d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z")
        path.setAttribute("fill-rule", "evenodd")
        path.setAttribute('clip-rule', 'evenodd')
        let newText = document.createElement("p")
        newText.innerHTML = taskInput.value
        newText.className = "my-auto"
        taskList.appendChild(div1).appendChild(newDiv).appendChild(newLabel).appendChild(newInput)
        newLabel.appendChild(newSpan).appendChild(svg).appendChild(path)
        newDiv.appendChild(newText)
        const newImage = document.createElement("img")
        newImage.setAttribute("src", "x.svg")
        newImage.className = "my-auto"
        newImage.addEventListener('click', () => {
            div1.remove()
        })
    }
}



addButton.addEventListener('click', addTask)
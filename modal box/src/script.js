let listItems = document.querySelectorAll('li')
let rightBox = document.getElementById('right-box')
let rightList = document.getElementById('right')
let leftBox = document.getElementById('left-box')
let leftList = document.getElementById('left')


for (let listItem of listItems) {
    listItem.addEventListener("dragstart", function(e) {
        let selected = e.target;
        console.log(selected)

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            rightList.appendChild(selected);
            selected = null;
        });


        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e) {
            leftList.appendChild(selected);
            selected = null;
        });

    })
}
const myInput = document.getElementById('my-input')
const showIcon = document.getElementById('show')
const hideIcon = document.getElementById('hide')

function showPass() {
    myInput.type = 'text'
    showIcon.classList.add('invisible')
    hideIcon.classList.remove('invisible')
}

function hidePass() {
    myInput.type = 'password'
    hideIcon.classList.add('invisible')
    showIcon.classList.remove('invisible')
}

showIcon.addEventListener('click', showPass)
hideIcon.addEventListener('click', hidePass)
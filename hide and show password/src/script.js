const myInput = document.getElementById('my-input')
const eyeIcon = document.getElementById('eye-icon')
eyeIcon.onclick = function() {
    if (myInput.type == "password") {
        myInput.type = "text";
        eyeIcon.src = "eye-fill.svg";
    } else {
        myInput.type = "password";
        eyeIcon.src = "eye-slash-fill.svg"
    }
}

showIcon.addEventListener('click', showPass)
hideIcon.addEventListener('click', hidePass)
const arrowRight = document.querySelector('.arrow-right')
const images = document.querySelectorAll('img')
const imagesLength = images.length;
console.log(images)
let again = false

function goToNext() {
    let element = document.querySelector('.active')
    let index
    if (again === false) {
        index = parseInt(element.id) + 1
    } else {
        index = parseInt(element.id) - 2
    }
    let strIndex = String(index)
    for (let i = 0; i < imagesLength; i++) {
        console.log(`helllooo ${i}`)
        if (images[i].id === strIndex) {
            element.className = ""
            images[i].className = "active";
            again = false
            console.log(i)
            break;
        } else if (i === (imagesLength - 1)) {
            again = true
            break;
        }
    }
}
arrowRight.addEventListener('click', goToNext)
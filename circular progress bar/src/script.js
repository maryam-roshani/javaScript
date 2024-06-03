function waiting() {
    const dots = document.getElementsByClassName('dots')
    for (const item of dots) {
        item.classList.add('larger')
        setTimeout(() => {

        }, 500)
    }
}

window.onload = waiting()
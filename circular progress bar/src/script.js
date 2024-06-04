function waiting() {
    const dots = document.getElementsByClassName('dots')
        // for (let item of dots) {
        //     setInterval(() => {
        //         item.classList.add('larger')
        //     }, 500)
        // }
    for (let i = 0; i < dots.length; i++) {
        setTimeout(() => {
            dots[i].classList.add('larger')
        }, 1000 * i);
        // if (i === 2) {
        //     i = 0
        // }
    }
}

window.onload = waiting()
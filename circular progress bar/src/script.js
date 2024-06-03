function waiting() {
    const dots = document.getElementsByClassName('dots')
        // for (let item of dots) {
        //     setInterval(() => {
        //         item.classList.add('larger')
        //     }, 500)
        // }
    for (let i = 0; i < dots.length; i++) {
        task(i);
    }

    function task(i) {
        setTimeout(() => {
            dots[i].classList.add('larger')
        }, 500 * i);
    }
}

window.onload = waiting()
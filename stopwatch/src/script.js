let [seconds, minutes, hours] = [0, 0, 0]
displayTime = document.getElementById("display-time")
let playButton = document.getElementById('play')
let resetButton = document.getElementById('reset')
let stopButton = document.getElementById('stop')

let timer = null

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = hours + " : " + minutes + " : " + seconds
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0]
    displayTime.innerHTML = "00 : 00 : 00"
}

function stop() {
    clearInterval(timer);
}

playButton.addEventListener('click', watchStart)
resetButton.addEventListener('click', reset)
stopButton.addEventListener('click', stop)
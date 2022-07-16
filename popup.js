const startBtn = document.querySelector('.js-start-btn');

const stopBtn = document.querySelector('.js-stop-btn');

const modal = document.querySelector('.js-stop-modal');

const notif = document.querySelector('.js-noti')

const closeNotif = document.querySelector('.js-modal-close')

var time = 20

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            modal.classList.remove('open')
            startBtn.classList.remove('close')
            timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

function showStopModal (){
    modal.classList.add('open')
    startBtn.classList.add('close')
    startTimer(time, display)
}

function hideStopModal(){
    modal.classList.remove('open')
    startBtn.classList.remove('close')
}

function hideNotif(){
    notif.classList.remove('open')
}

function showNotif(){
    notif.classList.add('open');
    closeNotif.addEventListener('click', hideNotif);
}

startBtn.addEventListener('click', showStopModal)

stopBtn.addEventListener('click', showNotif)




window.onload = function () {
    var time = 3000 / 2, // your time in seconds here 3000 secs = 25 min
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};
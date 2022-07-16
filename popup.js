const startBtn = document.querySelector('.js-start-btn');

const stopBtn = document.querySelector('.js-stop-btn');

const modal = document.querySelector('.js-stop-modal');

const notif = document.querySelector('.js-noti')

const closeNotif = document.querySelector('.js-modal-close')

var isExtensionOn = false

function showStopModal (){
    modal.classList.add('open')
    startBtn.classList.add('close')
    isExtensionOn = true
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
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('speed__counter');
let clicker;
let notFirstStart;
let currentDate = new Date();

cookie.onclick = () => {
    if (notFirstStart) {
        const now = new Date();
        clickerSpeed.textContent = (1 / ((now - currentDate) / 1000)).toFixed(2);
    }
    if (!clicker) {
        cookie.width = 250;
        clicker = true;
    } else {
        cookie.width = 200;
        clicker = false;
    }   
    clickerCounter.textContent++;
    currentDate = new Date();
    notFirstStart = true;
}
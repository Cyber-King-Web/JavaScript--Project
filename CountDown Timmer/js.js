let dayitem = document.getElementById("day");
let houritem = document.getElementById("hour");
let minitem = document.getElementById("min");
let secitem = document.getElementById("sec");

let getTime = () => {
    let futureDate = new Date("29 Nov 2024");  /* =========== SET TIME ============ */
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mins = Math.floor(myDate / 1000 / 60) % 60;
    let secs = Math.floor(myDate / 1000) % 60;

    dayitem.innerHTML = days;
    houritem.innerHTML = hours;
    minitem.innerHTML = mins;
    secitem.innerHTML = secs;
}

getTime();

setInterval(getTime, 1000);
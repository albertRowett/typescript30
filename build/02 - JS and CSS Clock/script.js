"use strict";
setDate();
setInterval(setDate, 1000);
function setDate() {
    const now = new Date();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    moveHands(hours, mins, secs);
}
function moveHands(hours, mins, secs) {
    const secHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const secDegrees = (secs / 60) * 360 + 90;
    const minDegrees = (mins / 60 + secs / 3600) * 360 + 90; // 3600 secs in 60 mins (one full rotation of min hand)
    const hourDegrees = (hours / 12 + mins / 720 + secs / 43200) * 360 + 90; // 720 mins = 43200 secs in 12 hours (one full rotation of hour hand)
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

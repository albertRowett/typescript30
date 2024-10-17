"use strict";
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
navigator.geolocation.watchPosition((data) => {
    var _a, _b;
    if (arrow) {
        const heading = (_a = data.coords.heading) !== null && _a !== void 0 ? _a : 0;
        arrow.style.transform = `rotate(${heading}deg)`;
    }
    if (speed) {
        const currentSpeed = (_b = data.coords.speed) !== null && _b !== void 0 ? _b : 0;
        const speedText = currentSpeed >= 0.05 ? currentSpeed.toFixed(1) : '0';
        speed.textContent = speedText;
    }
}, (error) => {
    console.error(error);
    alert('You must enable location access for this site to work.');
});

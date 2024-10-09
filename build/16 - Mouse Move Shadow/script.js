"use strict";
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 200; // 200px
function shadow(e) {
    if (hero && text) {
        const width = hero.offsetWidth;
        const height = hero.offsetHeight;
        let x = e.offsetX;
        let y = e.offsetY;
        const targetElement = e.target;
        if (this !== targetElement) {
            x = x + targetElement.offsetLeft;
            y = y + targetElement.offsetTop;
        }
        const xWalk = (x / width) * walk - walk / 2;
        const yWalk = (y / height) * walk - walk / 2;
        text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 rgba(255, 141, 26, 0.7),
            ${-xWalk}px ${yWalk}px 0 rgba(237, 221, 83, 0.7),
            ${xWalk}px ${-yWalk}px 0 rgba(42, 123, 155, 0.7),
            ${-xWalk}px ${-yWalk}px 0 rgba(81, 24, 73, 0.7)
        `;
    }
}
hero === null || hero === void 0 ? void 0 : hero.addEventListener('mousemove', shadow);

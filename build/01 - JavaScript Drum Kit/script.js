"use strict";
window.addEventListener('keydown', handleKeydown);
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', handleTransitionEnd);
});
function handleKeydown(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`);
    if (key && audio) {
        key.classList.add('playing');
        audio.currentTime = 0; // Resets audio to start to enable multiple plays in quick succession
        audio.play();
    }
}
function handleTransitionEnd(event) {
    const key = event.target;
    key.classList.remove('playing');
}

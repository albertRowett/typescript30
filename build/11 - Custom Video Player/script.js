"use strict";
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreenToggle = player.querySelector('.fullscreen');
let mousedown = false;
function togglePlay() {
    video.paused ? video.play() : video.pause();
}
function updateToggleButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
function handleRangeInput() {
    const method = this.name;
    if (method === 'volume' || method === 'playbackRate') {
        video[method] = parseFloat(this.value);
    }
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function toggleFullscreen() {
    document.fullscreenElement ? document.exitFullscreen() : player.requestFullscreen();
}
function updateFullscreenButton() {
    fullscreenToggle.innerHTML = document.fullscreenElement
        ? '<img src="./outlined-shrink-window-svgrepo-com.svg" height="15px" />'
        : '<img src="./expand-svgrepo-com.svg" height="15px" />';
}
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('loadeddata', handleProgress);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('mousedown', (e) => {
    mousedown = true;
    scrub(e);
});
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => (mousedown = false));
ranges.forEach((range) => range.addEventListener('input', handleRangeInput));
skipButtons.forEach((button) => button.addEventListener('click', skip));
fullscreenToggle.addEventListener('click', toggleFullscreen);
player.addEventListener('fullscreenchange', updateFullscreenButton);

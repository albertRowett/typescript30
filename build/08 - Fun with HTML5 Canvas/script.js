"use strict";
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = 'round';
context.lineCap = 'round';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
function draw(e) {
    if (!isDrawing)
        return;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (context.lineWidth === 100 || context.lineWidth === 1) {
        direction = !direction;
    }
    direction ? context.lineWidth++ : context.lineWidth--;
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mousemove', draw);

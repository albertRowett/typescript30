const canvas: HTMLCanvasElement = document.querySelector('#draw') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing: boolean = false;
let lastX: number = 0;
let lastY: number = 0;
let hue: number = 0;
let direction: boolean = true;

function draw(e: MouseEvent): void {
    if (!isDrawing) return;

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

canvas.addEventListener('mousedown', (e: MouseEvent) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mousemove', draw);

const video2: HTMLVideoElement | null = document.querySelector('.player');
const canvas2: HTMLCanvasElement | null = document.querySelector('.photo');
const ctx: CanvasRenderingContext2D | null = canvas2 ? canvas2.getContext('2d') : null;
const strip2: HTMLDivElement | null = document.querySelector('.strip');
const shutterButton: HTMLButtonElement | null = document.querySelector('.shutterButton');
const snap: HTMLAudioElement | null = document.querySelector('.snap');

function getVideo(): void {
    if (!video2) return;
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream: MediaStream) => {
            video2.srcObject = localMediaStream;
            video2.play();
        })
        .catch((err: Error) => {
            console.error('You blocked access to your camera.', err);
        });
}

function paintToCanvas(): number | void {
    if (!video2 || !canvas2 || !ctx) return;
    const width: number = video2.videoWidth;
    const height: number = video2.videoHeight;
    canvas2.width = width;
    canvas2.height = height;

    return setInterval(() => {
        ctx.drawImage(video2, 0, 0, width, height);
        // // Extract and manipulate pixels
        let pixels: ImageData = ctx.getImageData(0, 0, width, height);
        // // Uncomment the desired effect
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.2;
        // pixels = greenScreen(pixels);

        // // Reinsert manipulated pixels
        ctx.putImageData(pixels, 0, 0);
    }, 20);
}

function takePhoto(): void {
    if (!snap || !canvas2 || !strip2) return;
    snap.currentTime = 0;
    snap.play();
    const data: string = canvas2.toDataURL('image/jpeg');
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'image');
    link.innerHTML = `<img src="${data}" alt="Captured image from webcam" />`;
    strip2.insertBefore(link, strip2.firstChild);
}

function redEffect(pixels: ImageData): ImageData {
    const length: number = pixels.data.length;
    for (let i = 0; i < length; i += 4) {
        pixels.data[i] += 100; // Red
        pixels.data[i + 1] -= 100; // Green
        pixels.data[i + 2] -= 100; // Blue
    }

    return pixels;
}

function rgbSplit(pixels: ImageData): ImageData {
    const length: number = pixels.data.length;
    for (let i = 0; i < length; i += 4) {
        pixels.data[i - 150] = pixels.data[i]; // Red
        pixels.data[i + 100] = pixels.data[i + 1]; // Green
        pixels.data[i - 150] = pixels.data[i + 2]; // Blue
    }

    return pixels;
}

function greenScreen(pixels: ImageData): ImageData {
    const levels: { [key: string]: number } = {};
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.rgb input');
    inputs.forEach((input: HTMLInputElement) => {
        levels[input.name] = parseInt(input.value);
    });
    const length: number = pixels.data.length;

    for (let i = 0; i < length; i += 4) {
        const red = pixels.data[i];
        const green = pixels.data[i + 1];
        const blue = pixels.data[i + 2];

        if (
            red >= levels.rmin &&
            red <= levels.rmax &&
            green >= levels.gmin &&
            green <= levels.gmax &&
            blue >= levels.bmin &&
            blue <= levels.bmax
        ) {
            pixels.data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
    }

    return pixels;
}

getVideo();

video2?.addEventListener('canplay', paintToCanvas);
shutterButton?.addEventListener('click', takePhoto);

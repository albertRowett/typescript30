const player = document.querySelector('.player') as HTMLDivElement;
const video = player.querySelector('.viewer') as HTMLVideoElement;
const toggle = player.querySelector('.toggle') as HTMLButtonElement;
const progress = player.querySelector('.progress') as HTMLDivElement;
const progressBar = player.querySelector('.progress__filled') as HTMLDivElement;
const ranges: NodeListOf<HTMLInputElement> = player.querySelectorAll('.player__slider');
const skipButtons: NodeListOf<HTMLButtonElement> = player.querySelectorAll('[data-skip]');
const fullscreenToggle = player.querySelector('.fullscreen') as HTMLButtonElement;
let mousedown: boolean = false;

function togglePlay(): void {
    video.paused ? video.play() : video.pause();
}

function updateToggleButton(this: HTMLVideoElement): void {
    const icon: string = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleProgress(): void {
    const percent: number = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e: MouseEvent): void {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function handleRangeInput(this: HTMLInputElement): void {
    const method = this.name as keyof HTMLVideoElement;
    if (method === 'volume' || method === 'playbackRate') {
        video[method] = parseFloat(this.value);
    }
}

function skip(this: HTMLButtonElement): void {
    video.currentTime += parseFloat(this.dataset.skip as string);
}

function toggleFullscreen(): void {
    document.fullscreenElement ? document.exitFullscreen() : player.requestFullscreen();
}

function updateFullscreenButton(): void {
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
progress.addEventListener('mousedown', (e: MouseEvent) => {
    mousedown = true;
    scrub(e);
});
progress.addEventListener('mousemove', (e: MouseEvent) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => (mousedown = false));
ranges.forEach((range: HTMLInputElement) => range.addEventListener('input', handleRangeInput));
skipButtons.forEach((button: HTMLButtonElement) => button.addEventListener('click', skip));
fullscreenToggle.addEventListener('click', toggleFullscreen);
player.addEventListener('fullscreenchange', updateFullscreenButton);

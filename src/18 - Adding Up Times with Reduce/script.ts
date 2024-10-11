const videos = Array.from(document.querySelectorAll('[data-time]')) as HTMLLIElement[];

function calcTotalTime(): string {
    const totalSeconds: number = videos.reduce((totalSeconds: number, video: HTMLLIElement) => {
        if (video.dataset.time) {
            const [mins, secs] = video.dataset.time.split(':');
            const videoSeconds: number = parseInt(mins) * 60 + parseInt(secs);
            return totalSeconds + videoSeconds;
        }

        return totalSeconds;
    }, 0);
    const hours: number = Math.floor(totalSeconds / 3600);
    const mins: number = Math.floor((totalSeconds % 3600) / 60);
    const secs: number = totalSeconds % 60;

    return `${hours.toString()}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

console.log(`Total time of videos: ${calcTotalTime()}`);

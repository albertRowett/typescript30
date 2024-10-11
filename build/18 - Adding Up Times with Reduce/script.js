"use strict";
const videos = Array.from(document.querySelectorAll('[data-time]'));
function calcTotalTime() {
    const totalSeconds = videos.reduce((totalSeconds, video) => {
        if (video.dataset.time) {
            const [mins, secs] = video.dataset.time.split(':');
            const videoSeconds = parseInt(mins) * 60 + parseInt(secs);
            return totalSeconds + videoSeconds;
        }
        return totalSeconds;
    }, 0);
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString()}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
console.log(`Total time of videos: ${calcTotalTime()}`);

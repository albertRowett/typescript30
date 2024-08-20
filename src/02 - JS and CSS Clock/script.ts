setDate();
setInterval(setDate, 1000);

function setDate(): void {
    const now: Date = new Date();
    const secs: number = now.getSeconds();
    const mins: number = now.getMinutes();
    const hours: number = now.getHours();
    moveHands(hours, mins, secs);
}

function moveHands(hours: number, mins: number, secs: number): void {
    const secHand = document.querySelector('.sec-hand') as HTMLDivElement;
    const minHand = document.querySelector('.min-hand') as HTMLDivElement;
    const hourHand = document.querySelector('.hour-hand') as HTMLDivElement;

    const secDegrees: number = (secs / 60) * 360 + 90;
    const minDegrees: number = (mins / 60 + secs / 3600) * 360 + 90; // 3600 secs in 60 mins (one full rotation of min hand)
    const hourDegrees: number = (hours / 12 + mins / 720 + secs / 43200) * 360 + 90; // 720 mins = 43200 secs in 12 hours (one full rotation of hour hand)

    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

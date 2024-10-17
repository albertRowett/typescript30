const arrow: SVGElement | null = document.querySelector('.arrow');
const speed: HTMLSpanElement | null = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
    (data: GeolocationPosition) => {
        if (arrow) {
            const heading: number = data.coords.heading ?? 0;
            arrow.style.transform = `rotate(${heading}deg)`;
        }
        if (speed) {
            const currentSpeed: number = data.coords.speed ?? 0;
            const speedText: string = currentSpeed >= 0.05 ? currentSpeed.toFixed(1) : '0';
            speed.textContent = speedText;
        }
    },
    (error: GeolocationPositionError) => {
        console.error(error);
        alert('You must enable location access for this site to work.');
    }
);

const hero: HTMLDivElement | null = document.querySelector('.hero');
const text: HTMLHeadingElement | null = document.querySelector('h1');
const walk: number = 200; // 200px

function shadow(this: HTMLDivElement, e: MouseEvent) {
    if (hero && text) {
        const width: number = hero.offsetWidth;
        const height: number = hero.offsetHeight;
        let x: number = e.offsetX;
        let y: number = e.offsetY;
        const targetElement = e.target as HTMLElement;

        if (this !== targetElement) {
            x = x + targetElement.offsetLeft;
            y = y + targetElement.offsetTop;
        }

        const xWalk = (x / width) * walk - walk / 2;
        const yWalk = (y / height) * walk - walk / 2;

        text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 rgba(255, 141, 26, 0.7),
            ${-xWalk}px ${yWalk}px 0 rgba(237, 221, 83, 0.7),
            ${xWalk}px ${-yWalk}px 0 rgba(42, 123, 155, 0.7),
            ${-xWalk}px ${-yWalk}px 0 rgba(81, 24, 73, 0.7)
        `;
    }
}

hero?.addEventListener('mousemove', shadow);

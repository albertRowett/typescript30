const triggers: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
const highlight: HTMLSpanElement = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(this: HTMLAnchorElement): void {
    const linkCoords: DOMRect = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        x: linkCoords.x + window.scrollX,
        y: linkCoords.y + window.scrollY
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
}

triggers.forEach((a: HTMLAnchorElement) => a.addEventListener('mouseenter', highlightLink));

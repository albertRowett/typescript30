const panels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.panel');

panels.forEach((panel: HTMLDivElement) => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});

function toggleOpen(this: HTMLDivElement): void {
    this.classList.toggle('open');
}

function toggleActive(this: HTMLDivElement, e: TransitionEvent): void {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

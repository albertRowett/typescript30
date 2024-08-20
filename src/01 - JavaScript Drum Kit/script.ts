window.addEventListener('keydown', handleKeydown);
const keys: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>('.key');
keys.forEach((key: HTMLDivElement): void => {
    key.addEventListener('transitionend', handleTransitionEnd);
});

function handleKeydown(event: KeyboardEvent): void {
    const key: HTMLDivElement | null = document.querySelector(`.key[data-key="${event.keyCode}"`);
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${event.keyCode}"`);

    if (key && audio) {
        key.classList.add('playing');
        audio.currentTime = 0; // Resets audio to start to enable multiple plays in quick succession
        audio.play();
    }
}

function handleTransitionEnd(event: TransitionEvent): void {
    const key = event.target as HTMLDivElement;
    key.classList.remove('playing');
}

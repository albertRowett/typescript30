const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.controls input');

inputs.forEach((input: HTMLInputElement) => {
    input.addEventListener('input', handleUpdate);
});

function handleUpdate(this: HTMLInputElement) {
    const suffix: string = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

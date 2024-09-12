const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked: HTMLInputElement | null = null;
let holdingShift: boolean = false;

document.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Shift') {
        holdingShift = true;
    }
});

document.addEventListener('keyup', (e: KeyboardEvent): void => {
    if (e.key === 'Shift') {
        holdingShift = false;
    }
});

checkboxes.forEach((checkbox: HTMLInputElement) => checkbox.addEventListener('input', handleCheck));

function handleCheck(this: HTMLInputElement): void {
    let inBetween: boolean = false;

    if (lastChecked && holdingShift && this.checked === lastChecked.checked) {
        checkboxes.forEach((checkbox: HTMLInputElement) => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = this.checked;
            }
        });
    }

    lastChecked = this;
}

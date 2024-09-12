"use strict";
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked = null;
let holdingShift = false;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        holdingShift = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
        holdingShift = false;
    }
});
checkboxes.forEach((checkbox) => checkbox.addEventListener('input', handleCheck));
function handleCheck() {
    let inBetween = false;
    if (lastChecked && holdingShift && this.checked === lastChecked.checked) {
        checkboxes.forEach((checkbox) => {
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

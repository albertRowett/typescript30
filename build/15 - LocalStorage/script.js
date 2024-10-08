"use strict";
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearItems = document.querySelector('.clearAll');
const checkItems = document.querySelector('.checkAll');
const uncheckItems = document.querySelector('.uncheckAll');
let items = JSON.parse(localStorage.getItem('items') || '[]');
function addItem(e) {
    e.preventDefault();
    const inputElement = this.querySelector('[name=item]');
    const text = inputElement.value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    if (itemsList)
        populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
function populateList(items = [], itemsList) {
    itemsList.innerHTML = items
        .map((item, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
                <label for="item${i}">${item.text}</label>
            </li>`;
    })
        .join('');
}
function toggleDone(e) {
    const element = e.target;
    const i = parseInt(element.dataset.index);
    items[i].done = !items[i].done;
    localStorage.setItem('items', JSON.stringify(items));
}
function clearList() {
    items = [];
    localStorage.removeItem('items');
    if (itemsList)
        populateList(items, itemsList);
}
function checkOrUncheckList(toCheck) {
    const inputElements = document.querySelectorAll('.plates input');
    inputElements.forEach((inputElement, i) => {
        const item = items[i];
        if (toCheck !== inputElement.checked) {
            inputElement.checked = toCheck;
            item.done = toCheck;
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}
if (itemsList)
    populateList(items, itemsList);
addItems === null || addItems === void 0 ? void 0 : addItems.addEventListener('submit', addItem);
itemsList === null || itemsList === void 0 ? void 0 : itemsList.addEventListener('input', toggleDone);
clearItems === null || clearItems === void 0 ? void 0 : clearItems.addEventListener('click', clearList);
checkItems === null || checkItems === void 0 ? void 0 : checkItems.addEventListener('click', () => {
    checkOrUncheckList(true);
});
uncheckItems === null || uncheckItems === void 0 ? void 0 : uncheckItems.addEventListener('click', () => {
    checkOrUncheckList(false);
});

interface Item {
    text: string;
    done: boolean;
}

const addItems: HTMLFormElement | null = document.querySelector('.add-items');
const itemsList: HTMLUListElement | null = document.querySelector('.plates');
const clearItems: HTMLButtonElement | null = document.querySelector('.clearAll');
const checkItems: HTMLButtonElement | null = document.querySelector('.checkAll');
const uncheckItems: HTMLButtonElement | null = document.querySelector('.uncheckAll');
let items: Item[] = JSON.parse(localStorage.getItem('items') || '[]');

function addItem(this: HTMLFormElement, e: Event): void {
    e.preventDefault();
    const inputElement = this.querySelector('[name=item]') as HTMLInputElement;
    const text: string = inputElement.value;
    const item: Item = {
        text,
        done: false
    };
    items.push(item);
    if (itemsList) populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(items: Item[] = [], itemsList: HTMLUListElement): void {
    itemsList.innerHTML = items
        .map((item: Item, i: number) => {
            return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
                <label for="item${i}">${item.text}</label>
            </li>`;
        })
        .join('');
}

function toggleDone(e: Event): void {
    const element = e.target as HTMLInputElement;
    const i = parseInt(element.dataset.index as string);
    items[i].done = !items[i].done;
    localStorage.setItem('items', JSON.stringify(items));
}

function clearList(): void {
    items = [];
    localStorage.removeItem('items');
    if (itemsList) populateList(items, itemsList);
}

function checkOrUncheckList(toCheck: boolean): void {
    const inputElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('.plates input');
    inputElements.forEach((inputElement: HTMLInputElement, i: number) => {
        const item = items[i];
        if (toCheck !== inputElement.checked) {
            inputElement.checked = toCheck;
            item.done = toCheck;
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

if (itemsList) populateList(items, itemsList);

addItems?.addEventListener('submit', addItem);
itemsList?.addEventListener('input', toggleDone);
clearItems?.addEventListener('click', clearList);
checkItems?.addEventListener('click', () => {
    checkOrUncheckList(true);
});
uncheckItems?.addEventListener('click', () => {
    checkOrUncheckList(false);
});

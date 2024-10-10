const bands: string[] = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

function strip(band: string): string {
    return band.replace(/^(the |a |an )/i, '').trim();
}

const sortedBands: string[] = bands.sort((a: string, b: string) => (strip(a) < strip(b) ? -1 : 1));
const bandList: HTMLUListElement | null = document.querySelector('#bands');

if (bandList) {
    bandList.innerHTML = sortedBands.map((band: string) => `<li>${band}</li>`).join('');
}

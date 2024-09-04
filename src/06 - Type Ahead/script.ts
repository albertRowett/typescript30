const endpoint: string =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

interface City {
    city: string;
    growth_from_2000_to_2013: string;
    latitude: number;
    longitude: number;
    population: string;
    rank: string;
    state: string;
}

const cities: City[] = [];

fetch(endpoint)
    .then(response => response.json() as Promise<City[]>)
    .then((data: City[]) => cities.push(...data));

function findMatches(wordToMatch: string, cities: City[]): City[] {
    const regex: RegExp = new RegExp(wordToMatch, 'gi');
    return cities.filter((place: City) => place.city.match(regex) || place.state.match(regex));
}

function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(this: HTMLInputElement): void {
    const matchArray: City[] = findMatches(this.value, cities);
    const regex: RegExp = new RegExp(this.value, 'gi');
    const html: string = matchArray
        .map((place: City) => {
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(Number(place.population))}</span>
            </li>
        `;
        })
        .join('');

    if (suggestions !== null) {
        suggestions.innerHTML = html;
    }
}

const searchInput: HTMLInputElement | null = document.querySelector('.search');
const suggestions: HTMLUListElement | null = document.querySelector('.suggestions');

searchInput?.addEventListener('input', displayMatches);

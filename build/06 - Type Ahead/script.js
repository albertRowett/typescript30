"use strict";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(response => response.json())
    .then((data) => cities.push(...data));
function findMatches(wordToMatch, cities) {
    const regex = new RegExp(wordToMatch, 'gi');
    return cities.filter((place) => place.city.match(regex) || place.state.match(regex));
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const regex = new RegExp(this.value, 'gi');
    const html = matchArray
        .map((place) => {
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
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', displayMatches);

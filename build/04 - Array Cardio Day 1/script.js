"use strict";
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank'
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500s = inventors.filter((inventor) => inventor.year > 1499 && inventor.year < 1600);
console.log('Inventors born in the 1500s:');
console.table(inventorsBornIn1500s);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log("Inventors' names:");
console.log(inventorNames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log('Inventors sorted by birthdate (ascending):');
console.table(inventorsSortedByBirthdate);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((accumulator, inventor) => {
    return accumulator + inventor.passed - inventor.year;
}, 0);
console.log("Combined inventors' life lengths:");
console.log(totalYears);
// 5. Sort the inventors by years lived
const inventorsSortedByYearsLived = inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year));
console.log('Inventors sorted by years lived (ascending):');
console.table(inventorsSortedByYearsLived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category: HTMLDivElement = document.querySelector('.mw-category');
// const links: HTMLAnchorElement[] = Array.from(category.querySelectorAll('a'));
// const deBoulevards: string[] = links
//     .map((link: HTMLAnchorElement) => link.textContent || '')
//     .filter((boulevardName: string) => boulevardName.includes('de'));
// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSortedAlphabetically = people.sort();
console.log('People sorted alphabetically by surname:');
console.log(peopleSortedAlphabetically);
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
];
const counts = data.reduce((accumulator, current) => {
    if (accumulator[current] === undefined) {
        accumulator[current] = 0;
    }
    accumulator[current]++;
    return accumulator;
}, {});
console.log('Instances of transport types:');
console.table(counts);

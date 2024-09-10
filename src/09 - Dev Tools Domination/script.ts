interface Dog {
    name: string;
    age: number;
}

const dogs: Dog[] = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 }
];

function makeGreen(): void {
    const p: HTMLParagraphElement | null = document.querySelector('p');
    if (p !== null) {
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    }
}

// Regular
console.log('hello world');

// Interpolated
console.log('hello %s', 'world');

// Styled
console.log('%chello world', 'color:red');

// warning!
console.warn("'hello world' not available");

// Error :|
console.error("'hello world' not available");

// Info
console.info("'hello world' available again");

// Testing
console.assert('hello world' === ('hi Earth' as unknown), 'the strings are not the same');

// clearing
console.clear();

// Viewing DOM Elements
const p: HTMLParagraphElement | null = document.querySelector('p');
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog: Dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

// counting
console.count('hello');
console.count('world');
console.count('world');
console.count('hello');
console.count('hello');
console.count('world');
console.count('hello');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/albertRowett')
    .then(response => response.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// // Start with strings, numbers and booleans:
// let age: number = 100;
// let age2: number = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name2: string = 'Wes';
// let name3: string = name2;
// console.log(name2, name3);
// name2 = 'Wesley';
// console.log(name2, name3);

// // Let's say we have an array:
// const players: string[] = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// // If we want to make a copy of it, you might think we can just do something like this:
// const team: string[] = players;
// console.log(players, team);

// // However, what happens when we update that array?
// players[3] = 'Lux';
// console.log(players, team);

// // The problem is we've edited the original array too!
// // Why? Because it's an array reference, not an array copy; they both point to the same array.

// // So how do we fix this? We make a copy instead:
// const team2: string[] = players.slice();

// // Or create a new array and concat the old one in:
// const team3: string[] = [].concat(players);

// // Or use the new ES6 Spread:
// const team4: string[] = [...players];

// // Or use Array.from:
// const team5: string[] = Array.from(players);

// // Now when we update the arrays, the original array isn't changed:
// team2[3] = 'New';
// team3[3] = 'New 2';
// team4[3] = 'New 3';
// team5[3] = 'New 4';
// console.log(players, team2, team3, team4, team5);

// // The same thing goes for objects. Let's say we have a person object:
// interface Person2 {
//     name: string;
//     age: number;
// }

// const person: Person2 = {
//     name: 'Wes Bos',
//     age: 80
// };

// // This creates an object reference:
// const captain: Person2 = person;
// captain.age = 99;
// console.log(person, captain);

// // To take a copy instead:
// const captain2: Person2 = Object.assign({}, person, { age: 99 });
// console.log(person, captain2);

// // Alternatively, we can use the object ...spread:
// const captain3: Person2 = {...person};
// captain3.name = 'Wesley Bos';
// console.log(person, captain3);

// // NB: this only works one level deep (for both arrays and objects):
// interface Person3 extends Person2 {
//     socials: {
//         twitter: string,
//         facebook: string
//     }
// }

// const wes: Person3 = {
//     name: 'Wes',
//     age: 100,
//     socials: {
//         twitter: '@wesbos',
//         facebook: 'wesbos.developer'
//     }
// }

// const dev: Person3 = Object.assign({}, wes);
// dev.name = 'Wesley';
// dev.socials.twitter = '@wesleybos';
// console.log(wes, dev);

// // lodash has a cloneDeep method, but you should think twice before using it (is it really necessary?).

// // An alternative way to deep clone objects (again, is it really necessary?):
// const dev2: Person3 = JSON.parse(JSON.stringify(wes));
// dev2.socials.twitter = '@coolman';
// console.log(wes, dev2);

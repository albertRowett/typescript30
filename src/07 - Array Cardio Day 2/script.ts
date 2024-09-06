// ## Array Cardio Day 2

interface Person {
    name: string;
    year: number;
}

const people2: Person[] = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

interface TextComment {
    text: string;
    id: number;
}

const comments: TextComment[] = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const checkAge = (person: Person): boolean => {
    const currentYear: number = new Date().getFullYear();
    return currentYear - person.year > 18;
};

const atLeastOneOver18: boolean = people2.some(checkAge);
console.log({ atLeastOneOver18 });

// Array.prototype.every() // is everyone 19 or older?
const allOver18: boolean = people2.every(checkAge);
console.log({ allOver18 });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment: TextComment | undefined = comments.find((comment: TextComment) => comment.id === 823423);
console.log({ comment });

// Array.prototype.findIndex()
// Find the comment with this ID
const commentIndex: number = comments.findIndex((comment: TextComment) => comment.id === 823423);
console.log({ commentIndex });
// delete the comment with the ID of 823423
const newComments: TextComment[] = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
console.log('After comment with id = 823423 removed:');
console.table(newComments);

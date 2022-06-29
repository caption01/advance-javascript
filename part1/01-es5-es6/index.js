// let & const
const myName = 'beeboy';
let isTrueOrFalse = true;

if (true) {
  let isTrueOrFalse = false;
  console.log('inside', isTrueOrFalse);
}

console.log('outside', isTrueOrFalse);

// Destructuring
const student = {
  name: 'john',
  age: 25,
};

const name = student.name;
const age = student.age;

const { name: studentName, age: studentAge } = student;

// Object properties
const locationKey = 'location';

const country = {
  [locationKey]: 'BKK',
};

// Template string
const people1 = 'Smith';
console.log(`Hello Mr.${people1}`);

// default arguments
function said(word = 'Nothing') {
  console.log(`I need to said ${word}`);
}

// Symbol
const symbol1 = new Symbol('1');
const symbol2 = new Symbol('1');

const isEqial = symbol1 === symbol2; // false

// arrow function
const said = (word = 'Nothing') => console.log(`I need to said ${word}`);

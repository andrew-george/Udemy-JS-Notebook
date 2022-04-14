'use strict';

//=> LECTURE: DEFAULT PARAMETERS
/* const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //*ES5
  // numPassengers ||= 1;
  // price ||= 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
 */
//=> LECTURE: PASSING ARGUMENTS (VALUES VS REFERENCES)
/* const flight = 'LH234';
const andrew = {
  name: 'Andrew Berty',
  passport: 248979846613,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr, ' + passenger.name;

  if (passenger.passport === 248979846613) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, andrew);
console.log(flight);
console.log(andrew);

const newPAssport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPAssport(andrew);
checkIn(flight, andrew);
 */

//=>LECTURE: FIRST CLASS VS HIGHER ORDER FUNCTIONS

/**
 * - First class functions
 * * JS treats functions as first-class citizens
 * * this means that functions are values
 * * functions are just another type of objects
 */

/**
 * - Higher order functions
 * * a function that receives another function as an argument, that returns a new function, or both
 * * it is only possible because of first class functions
 */

//=>LECTURE: FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
/* const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//* Higher order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//* JS uses callbacks all the time
const hight5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', hight5);

['Jonas', 'Martha', 'Adam'].forEach(hight5);
 */

//=> LECTURE: FUNCTIONS RETURNING FUNCTIONS
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Andrew');
greeterHey('Jonas');

greet('Hello')('Andrew');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey')('Andrew');
 */

//=> LECTURE: THE CALL AND APPLY METHODS
/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('239', 'Andrew Berty');
lufthansa.book('635', 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//ERROR
// book(23, 'Sarah Williams');

//* call method lets us choose which object that this keyword refers to, then arguments to pass in the function
//* MORE USED IN MODERN JAVASCRIPT
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//* apply method
//* apply method lets us choose which object that this keyword refers to, then ARRAY OF ARGUMENTS to pass in the function
//* NOT USED SO MUCH
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

//* instead we can use call with arrays with spread operator
book.call(swiss, ...flightData); */

//=> LECTURE: THE BIND METHOD
//* bind method lets us choose which object that this keyword refers to.
//* it creates a new function and bind a new reference for this keyword
//* we can bind all objects at once then call regular functions with newly created variables
//* we can also pass an argument to bind to the function to be stored

/* const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

//- example on what is called 'Partial Application'
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Andrew Berty');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//null because there is no this keyword in the original function
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxes = function (rate) {
  return function addVAT2(value) {
    return value + value * rate;
  };
};

console.log(addTaxes(0.23)(100));
 */

//=> Coding Challenge #1
/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (
      typeof userInput === 'number' &&
      userInput >= 0 &&
      userInput < this.answers.length
    ) {
      this.answers[userInput]++;
      this.displayResults(this.answers);
    }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [...Data1] });
poll.displayResults.call({ answers: [...Data2] });
 */

//=> LECTURE: IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

/* const runOnce = function () {
  console.log('This will never run again');
};

// runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}
console.log(notPrivate); */

//=> LECTURE: CLOSURES

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};
//booker is now a function
const booker = secureBooking();
booker();
booker();
booker();
// console.log(booker);

console.dir(booker);
 */
//=>LECTURE: MORE CLOSURE EXAMPLES
/* // Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

//re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3); */

//=> CODING CHALLENGE #2

/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', headerToBlue);
  function headerToBlue() {
    header.style.color = 'blue';
    setTimeout(function () {
      header.style.color = 'red';
    }, 100);
  }
})();
 */

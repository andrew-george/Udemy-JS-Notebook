'use strict';

//LECTURE: SCOPING IN PRACTICE
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       //reassigning outer scope's variable
//       console.log(output);

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT';
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Andrew';
// calcAge(1991);

// //LECTURE: HOISTING IN PRACTICE
// //Variables
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Andrew'; //hoisted and set to undefined
// let job = 'Developer'; //cannot access before initialization
// const year = 1997; //not hoisted (TDZ)

// //Functions
// //console.log(addDecl(2, 3)); //5
// //console.log(addExp(2, 3)); // cannot access before initialization
// //console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //EXAMPLE
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// //creates a property on global window object
// var x = 1;
// //don't create a property on global window object
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//LECTURE: THIS KEYWORD IN PRACTICE
// console.log(this); // window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // this keyword of parent scope
// };
// calcAgeArrow(1991);

// const andrew = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// andrew.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = andrew.calcAge;
// console.log(matilda);
// matilda.calcAge();

// const f = andrew.calcAge;
// // f();

//LECTURE: REGULAR FUNCTIONS VS. ARROW FUNCTIONS
// var firstName = 'Matilda';
// const andrew = {
//   firstName: 'Andrew',
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//OLD fix
// const self = this; //self or that
// const isMillenial = function () {
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//ES6 fix use Arrow function
//   const isMillenial = () => {
//     console.log(this.year >= 1981 && this.year <= 1996);
//   };

//   isMillenial();
// },
//arrow functions does not have its own this keyword
//this in this case points to window global object
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// andrew.greet(); //Hey undefined
// andrew.calcAge();

//arguments keyword
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5, 6, 7);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);

//LECTURE: PRIMITIVE VALUES VS. OBJECTS
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Andrew',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(friend.age);
// console.log(me.age);

//LECTURE: PRIMITIVE VALUES VS. OBJECTS IN PRACTICE

//primitive types
let lastName = 'Williams';
let OldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(OldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//just making a new variable pointing to the same object not making a new object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//shallow copy : will only copy properties in first level unlike Deep clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2, jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2, jessicaCopy);

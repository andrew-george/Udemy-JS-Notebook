'use strict';

// Lecture: Constructor Function and the new Operator

const Person = function (firstName, birthYear) {
  //- Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never to create methods inside constructor function as it will create multiple functions with each new instance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

//- Behind The Scenes
// 1. new empty {} is created
// 2. function is called, so, this = empty {}
// 3. empty {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas, matilda, jack);

console.log(jonas instanceof Person);

// Lecture: Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true

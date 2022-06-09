'use strict';

// Lecture: Constructor Function and the new Operator

/* const Person = function (firstName, birthYear) {
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

Person.hey = function () {
  console.log('Hey There 👋');
};

Person.hey();
//jonas.hey();   error

// Lecture: Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true

// - prototype of Person object is the object blueprint that we will create all instances on it.

// - prototype property in Person object is the properties and methods that every instance created from Person object can use.

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//* Prototype chain

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

//- adding a new method to prototype of the Array constructor so we can use this method on any array due to prototypal inheritance
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
//=> Coding Challenge #1
/* 
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h 
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const firstCar = new Car('BMW', 120);
console.log(firstCar);

const secondCar = new Car('Mercedes', 95);
console.log(secondCar);

// accelerate
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// brake
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

firstCar.accelerate();
firstCar.accelerate();
firstCar.brake();

secondCar.accelerate();
secondCar.brake();
secondCar.brake();
secondCar.brake();

//=> ES6 Classes

// class expression
//const PersonCl = class {};

// class declaration
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype property and inherited to all instances
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log('Hey There👋');
    console.log(this);
  }
} 

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

PersonCl.hey();
 //* - Classes are NOT hoisted
 //* - Classes are first-class citizens
 //* - Classes are executed in strict mode
*/

//=> Setters and Getters

/**
 * - adding get or set keyword before method name
 * - using it by setting it as if it is a property to to call it as a function
 */
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//=> Static Method
// this .from method is static to the Array constructor
Array.from(document.querySelectorAll('h1'));

// it will not work on actual arrays
//[1,2,3].from(5)

//=> Object.Create

/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();
*/

//=> Coding Challenge #2
/* 
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
 */
/* 
class CarCl {
  // constructor function
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // methods
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  // getters
  get speedUS() {
    return `Car is going ${this.speed / 1.6} mi/h`;
  }

  // setters
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();

console.log(ford.speedUS);

ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
ford.brake();

console.log(ford.speedUS);
 */
//=> Inheritance Between Classes: Constructor functions

const Person = function (firstName, birthYear) {
  //- Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
console.log(mike.__proto__);

console.log(mike);

//=> Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definition of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% */

/**
 * - use constructor function to make a new child class
 * - at first line call the parent class's constructor function with call method to integrate 'this' keyword
 * -link prototypes by setting the child prototype using Object.create and pass the parent's prototype
 * - add any new methods
 */

//* previously made class
//
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// constructing a new Child class of EV
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking Prototypes
EV.prototype = Object.create(Car.prototype);

// adding new methods

// charge battery
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// accelerate
EV.prototype.accelerate = function (speed) {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// creating a new instance
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();

tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();

//=> Inheritance between classes: ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype property and inherited to all instances
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log('Hey There👋');
    console.log(this);
  }
}

//- Creating StudentCl from PersonCl

class StudentCl extends PersonCl {
  //* ONLY IF we need to add any new properties, otherwise, we can neglect constructor function
  constructor(fullName, birthYear, course) {
    //super function creates "this" keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // this calcAge will be used and shadow(overwrite) the calcAge method on StudentCl class
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();

//=> Inheritance between classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//=> Another Class example

// Public fields
// Private fields
// Public methods
// Private methods
// (there is also the static version)

class Account {
  // Public field (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];

  //- because we have to set the pin according to pin value that the constructor function receives so we declare it here and set it inside the constructor function
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    // this._pin = pin;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public Methods
  // Public Interface (API)

  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan Approved!');
      return this;
    }
  }
  static helper() {
    console.log('Helper');
  }
  // Private Methods
  #approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//acc1.movements.push(250);
//acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#approveLoad(100));
Account.helper();

//=> Chaining Methods

//- We have to return 'this' at the end of methods we want to be chainable

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//=> Coding Challenge #4
/* 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% */

class CarCl {
  // constructor function
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // methods
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    return this;
  }

  // getters
  get speedUS() {
    return `Car is going ${this.speed / 1.6} mi/h`;
  }

  // setters
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  //constructor function
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // methods

  //accelerate
  accelerate(speed) {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  // charge battery
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(90)
  .accelerate();

console.log(rivian.speedUS);

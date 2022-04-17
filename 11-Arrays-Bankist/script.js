'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//=> LECTURE: SIMPLE ARRAY METHODS
/* let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//* Shallow Copy
//-allow chaining
console.log(arr.slice());

//-not allow chaining
console.log([...arr]);

// SPLICE (Mutate original array)
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// REVERSE (Mutate original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
 */

//=> LECTURE: THE NEW (AT) METHOD
/* const arr = [23, 11, 64];
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// works on strings
console.log('Andrew'.at(0));
 */

//=> LECTURE: LOOPING OVER ARRAY: FOR EACH METHOD
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('-------------For Each-------------');

//* YOU CAN NOT BREAK OUT OF FOR EACH LOOP
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */

//=> LECTURE: FOR EACH METHOD WITH MAPS AND SETS
/* // MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, Set) {
  console.log(`${value}: ${value}`);
});
 */

//=> LECTURE: CREATING DOM ELEMENTS

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__value">${mov}</div>
   </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//=> Coding challenge #1
/* //Data1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

//1)
const checkDogs = function (arr1, arr2) {
  const arrCorrected = arr1.slice(1, 3);
  const allDogs = [...arrCorrected, ...arr2];

  console.log(allDogs);

  allDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(julia, kate);

//Data2
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
checkDogs(julia2, kate2);
 */
//=>LECTURE: DATA TRANSFORMATION WITH MAP, FILTER, REDUCE
/**
 * - Map Method
 * * it loops over an existing array executing a callback function and returns a new array
 *
 * - Filter Method
 * * it loops over an existing array and returns a new array with filtered items that passes a certain condition
 *
 * - Reduce Method
 * * it loops over an existing array and reduces it to one value by having an accumulator value and adds the current value on each iteration and return one final value without creating a new array
 */

//=>LECTURE: THE MAP METHOD
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
 */

//=>LECTURE: COMPUTE USERNAMES
/* const createUsernames = accounts => {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);
 */

//=>LECTURE: THE FILTER METHOD
/* const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
 */

//=> LECTURE: THE REDUCE METHOD

/* const balance = movements.reduce((acc, curr) => acc + curr);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
 */

/* const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}EUR`;
};
calcPrintBalance(account1.movements);

//Maximum value
const maxValue = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(maxValue);
 */

//=>Coding challenge 2

const calcAverageHumanAge = ages => {
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return ages;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//=>LECTURE: THE MAGIC OF CHAINING METHODS
const euroToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const calcDisplaySummary = function () {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};
calcDisplaySummary(account1.movements);

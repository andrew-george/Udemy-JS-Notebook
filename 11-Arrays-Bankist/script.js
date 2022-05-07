// 'use strict';

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //sort functionality
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__value">${mov}€</div>
   </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
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
const createUsernames = accounts => {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

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

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

/* //Maximum value
const maxValue = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(maxValue); */

//=>Coding challenge 2

/* const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const sumNumbers = (x, y) => x + y;

const result = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(result);

console.log(sumNumbers(4, 6));
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

 */
//=>LECTURE: THE MAGIC OF CHAINING METHODS
/* const euroToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
 */
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

//=> LECTURE: THE FIND METHOD
//* similar to filter method
//* it doesn't return a new array. just one value
//* filter method returns all elements that meets the condition while find method returns only the first one
/* const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);
 */

//=> LECTURE: IMPLEMENTING LOGIN
// Event handlers

const updateUI = function (currentAccount) {
  //display movements
  displayMovements(currentAccount.movements);
  //display balance
  calcPrintBalance(currentAccount);
  //display summary
  calcDisplaySummary(currentAccount);
};
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //show UI and welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

//=> LECTURE: IMPLEMENTING TRANSFERS
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
});

//=> LECTURE: THE FIND INDEX METHOD

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Correct credentials');
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

//=> LECTURE: THE SOME AND EVERY METHODS

// console.log(movements);

//EQUALITY
// console.log(movements.includes(-130));

//-some method
// CONDITION
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    // add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

/* //-every method
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//-separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
 */

//=> LECTURE: FLAT AND FLATMAP

/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

//-depth argument
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//-flat map method (map + flat)
//* flattens only 1 level

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);
 */

//=> LECTURE: SORTING ARRAYS
/* 
// Strings
//-It mutates the original array

const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// comparative callback function
// - return -value => ascending
console.log(movements.sort((a, b) => a - b));

// - return +value => descending
console.log(movements.sort((a, b) => b - a));
 */
//=> LECTURE: MORE WAYS TO CREATE AND FILL ARRAYS
/* const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

const diceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);

console.log(diceRolls);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUI);
});
 */
//=> LECTURE: SUMMARY: WHICH ARRAY METHOD TO USE

/**
 * - To mutate original array
 * * .push (add to end)
 * * .unshift (add to start)
 * * .pop (remove from end)
 * * .shift (remove from start)
 * * .splice (remove any)
 * * .reverse
 * * .sort
 * * .fill
 */

/**
 * - A new array
 * * .map (computed from original) (loop)
 * * .filter (filtered using condition)
 * * .slice (portion from original)
 * * .concat (adding original to other)
 * * .flat .flatMap (flattening original)
 */

/**
 * - An array index
 * * .indexOf (based on value)
 * * .findIndex (based on test condition)
 */

/**
 * - An array element
 * * .find (based on test condition)
 */

/**
 * - Know if array includes
 * * .includes (based on value)
 * * .some .every (based on test condition)
 */

/**
 * - A new string
 * * .join (based on separator string)
 */

/**
 * - To transform to value
 * * .reduce (based on accumulator) (boils down array to single value of any type)
 */

/**
 * - To loop Array
 * * .forEach (does not create new array)
 */

//=> LECTURE: ARRAY METHODS PRACTICE

// //1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// //2.
// /* const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);
//  */

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// //3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// //4.
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//=> CODING CHALLENGE 4

// test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const foodPortion = function (dog) {
  const current = dog.curFood;
  const recommended = dog.recommendedFood;
  if (current > recommended * 0.9 && current < recommended * 1.1) {
    return `Dog is eating okay amount of food`;
  } else if (current > recommended) {
    return `Dog is eating too much food!`;
  } else if (current < recommended) {
    return `Dog is eating too little food!`;
  }
};
//1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//2.
console.log(foodPortion(dogs.find(dog => dog.owners.includes('Sarah'))));

//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

//4.
console.log(`${ownersEatTooMuch.join(', ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(', ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
//6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//7.
const DogsEatOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(DogsEatOkay);

//8.
const sortedDogs = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedDogs);

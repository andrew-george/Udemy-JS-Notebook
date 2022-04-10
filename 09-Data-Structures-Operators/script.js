'use strict';
// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHour = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //*ES6 enhanced object literals
  //*we don't have to create a property to point is to a variable of an object
  openingHour,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //*ES6 enhanced object literals
  //* in writing methods we can use shorter syntax by removing function word and :
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/* restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole,21',
  starterIndex: 1,
}); */

//=>LECTURE: DESTRUCTURING OBJECTS
/* const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours); */

//extracting properties into variables with different names
/* const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
 */
//default values
/* const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

//mutating variables
/* let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); */

//nested objects
/* const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */
//LECTURE: DESTRUCTURING ARRAYS
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); */

//switching variables before destructuring
/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

//switching variables using destructuring
/* [main, secondary] = [secondary, main];
console.log(main, secondary); */

//recieve 2 return values from function
/* const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); */

//nested destructuring
/* const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k); */

//default values
/* setting default value of one for variables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8,9,1(instead of undefined) */

//=>LECTURE: THE SPREAD OPERATOR
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); */

//use cases
/* copying array(Shallow Copy)
const mainMenuCopy = [...restaurant.mainMenu]; */

//join 2+ arrays
/* const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); */

//*Iterables: arrays, strings, maps, sets NOT Objects

/* const str = 'Andrew';
const letters = [...str, '', 'G.'];
console.log(letters);

console.log(...str); */
//*syntax error
//*multiple elements separated by a comma is usally expected when we are building a new array or passing to function as argument
// console.log(`${...str} George`);

//Real-world example
/* const ingredients = [
  prompt(`Let's Make Pasta! Ingredient 1 ?`),
  prompt(`Ingredient 2 ?`),
  prompt(`Ingredient 3 ?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); */

//Objects

/* const newRestaurant = { foundedIn: 1981, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name, restaurant.name);
 */
//=>LECTURE: REST Pattern and parameters

//=> 1)Destructuring

//* SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];

//* REST because on left side of =
/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); */

// objects
/* const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
 */
//=> 2)Functions
//REST parameters
/* const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 4, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');

restaurant.orderPizza('Mushrooms'); */

//=> LECTURE: SHORT CIRCUITING
/**
 * ? Logical operators properties
 * * use ANY data type
 * * return ANY data type
 * * short circuiting
 */
//* ---OR---
/* console.log(3 || 'Andrew');
console.log('' || 'Andrew');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guestes1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guestes1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2); */

//* ---AND---
/* console.log(0 && 'Andrew');
console.log(7 && 'Andrew');

console.log('Hello' && 23 && null && 'Andrew');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

//=>LECTURE: nullish coalescing operator (??)
//-executes as OR short circuiting on nullish values instead of falsy values
//? nullish values are null or undefined (NOT 0 or '')

/* restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests); */

//=>LECTURE: LOGICAL ASSIGNMENT OPERATORS
/* const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}; */
//* OR assignment operator
/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; */

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//* nullish assignment operator
/* rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//* AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);
 */

//=>CODING CHALLENGE #1
//* Data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1)
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2)
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5)
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6)
const printGoals = function (...playerNames) {
  console.log(`${playerNames} scored ${playerNames.length} goals!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7)
game.odds.team1 < game.odds.team2 &&
  console.log('Team 1 is more likely to win!');
game.odds.team2 < game.odds.team1 &&
  console.log('Team 2 is more likely to win!');
 */

//=>LECTURE: LOOPING ARRAYS: THE FOR OF LOOP
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`); */

//=> LECTURE: OPTIONAL CHAINING
/* if (restaurant.openingHour.mon) console.log(restaurant.openingHour.mon.open);

//*with optional chaining(?.)
console.log(restaurant.openingHour.mon?.open);
console.log(restaurant.openingHour?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHour[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Andrew', email: 'andrewgeorgeberty@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
*/
//=>LECTURE: LOOPING OBJECTS
/* //*Property names
const properties = Object.keys(openingHour);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//*Property values
const values = Object.values(openingHour);
console.log(values);

note: entries = keys + values

const entries = Object.entries(openingHour);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

//=> CODING CHALLENGE #2
//1)
/* let goalNum = 1;
for (const player of game.scored) {
  console.log(`Goal ${goalNum}: ${player}`);
  goalNum++;
}

//2)
const values = Object.values(game.odds);
let sum = 0;
for (const value of values) {
  sum += value;
}
console.log(sum / values.length);

//3)
const entries = Object.entries(game.odds);

for (const [key, value] of entries) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}
 */
//=>LECTURE: SETS
/**
 * * Unique order of values
 * * Can not have duplicates
 * * Iterable
 * * Looks like an array but different in:
 *    - elements are unique
 *    - Order is Irrelevant
 */

/* const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Andrew'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
 */

//=> LECTURE: MAPS
/**
 * * keys can be any type of data
 * * .set method is to add info to empty map
 * * .set method returns the whole updated map
 * * .set method can be chained
 * * .get method is used to get data from map
 */
/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set([1, 2], 'Test');
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

//not the same object inside the map
console.log(rest.get([1, 2])); //undefined
 */
//=>LECTURE: MAPS (ITERATION)
/* const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//* convert object to map
console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));
console.log(hoursMap);

//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
 */

//=>LECTURE: WHICH DATA STRUCTURE TO USE? (SUMMARY)

//- Sources of Data
/**
 * * From the program itself (Hard coded): e.g Status messages
 * * From the UI: Data from user, written in DOM
 * * From external sources: data fetched from APIs
 */
//-Collection of data

//-Data Structures
/**
 * ? Simple list of values
 * * ARRAYS or SETS
 * ? Key/Value Pairs?
 * * OBJECTS or MAPS //-Keys allow us to describe values
 */

//-ARRAYS
/**
 * * when you need ordered list of values (might contain duplicates)
 * * when you need manipulate date
 */

//-SETS
/**
 * * when you need to work with unique values
 * * when high-performance is really important
 * * use to remove duplicates from arrays
 */

//-OBJECTS
/**
 * * more traditional
 * * easier to write and access values with . and []
 *
 * * when you need to include functions(methods)
 * * when working with JSON (can convert to map)
 */

//-MAPS
/**
 * * Better performance
 * * can have any data type
 * * easy to iterate
 * * easy to compute size
 *
 * * use when you simply need to map key to values
 * * use when you need keys that are not strings
 */

//=> CODING CHALLENGE #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1)
// const eventSet = new Set();
// for (const [minute, gameEvent] of gameEvents) {
//   eventSet.add(gameEvent);
// }
// const events = [...eventSet];
// console.log(events);

//* Better Solutions
const events = [...new Set(gameEvents.values())];
console.log(events);

//2)
gameEvents.delete(64);
//3)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

//4)
for (const [minute, event] of gameEvents) {
  console.log(
    `${minute < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${minute}: ${event}`
  );
}
*/
//=>LECTURE: WORKING WITH STRINGS PART 1
const airline = 'TAP Air Portugal';
// const plane = 'A320';
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log('It is a middle seat')
    : console.log('It is not a middle seat');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/**
 * - Behind the scenes
 * ? How can we call methods on strings while they are primitive values
 * * as soon as we call a method on a string JS converts in into an object with the same content and has the methods. which is known as 'Boxing'
console.log(new String('Andrew'));
 */
//=>LECTURE: WORKING WITH STRINGS PART 2
/* console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//* fix capitalization in  name
const passenger = 'aNdRew';
const passengerLower = passenger.toLowerCase();
const correctName = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctName);

//* function to fix name capitalization
function capitalInitial(name) {
  const nameLower = name.toLowerCase();
  const correctName = `${nameLower[0].toUpperCase()}${nameLower.slice(1)}`;
  console.log(correctName);
}

capitalInitial('anDreW');
capitalInitial('wiLLiaM');

//* comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.IO ';

//- we can chain string methods
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//* replace
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate'));

//* booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW airbus family');
}

//practice exercise
const checkBaggage = function (items) {
  //- when you process any input from users always convert it to lower case first
  //?because these methods are case sensitive
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('got some snacks and a gun for protection');
 */

//=>LECTURE: WORKING WITH STRINGS PART 3
//* Split and Join
/* console.log('a+very+nice+string'.split('+'));
console.log('Andrew George'.split(' '));
const [firstName, lastName] = 'Andrew George'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('andrew george');

//* padding
//-adds a certain string to pad the string at start or at end to be at a certain length of characters
const messages = 'Go to gate 23!';
console.log(messages.padStart(25, '+'));
console.log('Andrew'.padStart(25, '+'));
console.log('Andrew'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(6761886846984564));

//* repeat
const message2 = 'Bad weather... All Departures Delayed ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(12);
planesInLine(3);
 */

//=> CODING CHALLENGE #4
/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const userInput = textArea.value;
  const lines = userInput.split('\n');
  let ticksCounter = 1;
  for (const line of lines) {
    const [first, second] = line.trim().toLowerCase().split('_');
    const camelCaseStr = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
    console.log(`${camelCaseStr.padEnd(20)}${'✅'.repeat(ticksCounter)}`);
    ticksCounter++;
  }
});
 */

//=> Practice Example
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/* const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
} */

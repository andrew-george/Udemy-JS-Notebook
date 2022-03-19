"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) {
//   console.log("I can drive!");
// }

// const interface = "Audio";
// const private = 534;
// const if = 23;

//LECTURE: FUNCTION
// function logger() {
//   console.log("My name is Andrew");
// }
// //calling/ running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//LECTURE: FUNCITON DECLARATION & EXPRESSION
//FUNCTION DECLARATION
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(1997);

// //FUNCTION EXPRESSION
// //ANONYMOUS FUNCTION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1997);

// console.log(age1, age2);

//LECTURE: ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1997, "Andrew"));

//LECTURE: FUNCTIONS CALLING ANOTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//CODING CHALLENGE #1
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// //test data #1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No one wins!");
//   }
// }
// checkWinner(avgDolphins, avgKoalas);

// //test data #2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKoalas);

// checkWinner(avgDolphins, avgKoalas);

//LECTURE: Introduction to Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const Andrew = [
//   "Andrew",
//   "Berty",
//   2022 - 1997,
//   "Junior Frontend Developer",
//   friends,
// ];
// console.log(Andrew);
// console.log(Andrew.length);

// //Excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//LECTURE: Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];

// //add at the end
// friends.push("Jay");
// console.log(friends);

// //add at the start
// friends.unshift("John");
// console.log(friends);

// //remove from end
// const lastEle = friends.pop();
// console.log(friends);
// console.log(lastEle);

// //remove from start
// const firstEle = friends.shift();
// console.log(friends);
// console.log(firstEle);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // returns-1

// //uses strict equality
// console.log(friends.includes("Michael"));
// console.log(friends.includes("Andrew"));

// friends.push(23);
// console.log(friends.includes("23"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// CODING CHALLENGE #2
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = bill * 0.15;
//     return tip;
//   } else {
//     const tip = bill * 0.2;
//     return tip;
//   }
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//LECTURE: INTRODUCTION TO OBJECTS

// const andrewArray = ["Andrew", "Berty", 2037 - 1997, "Frontend Dev"];

// const andrew = {
//   firstName: "Andrew",
//   lastName: "Berty",
//   age: 2037 - 1997,
//   job: "Frontend Dev",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(andrew);

//LECTURE: DOT VS. BRACKET NOTATION
//dot notation
// console.log(andrew.lastName);

//bracket notation
//(needs to contain a string)
//takes an expression (computed property name)
// console.log(andrew["lastName"]);

// const nameKey = "Name";
// console.log(andrew["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Andrew? Choose between firstName, lastName, age,job and friends"
// );

// if (andrew[interestedIn]) {
//   console.log(andrew[interestedIn]);
// } else {
//   console.log("wrong request!");
// }

// andrew.location = "Egypt";
// andrew["github"] = "andrew-george";
// console.log(andrew);

//CHALLENGE
// console.log(
//   `${andrew.firstName} has ${andrew.friends.length} friends ,and his best friend is called ${andrew.friends[0]}`
// );

//LECTURE: OBJECTS METHODS

// const andrew = {
//   firstName: "Andrew",
//   lastName: "Berty",
//   birthYear: 1997,
//   job: "Frontend Dev",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(andrew.calcAge());

// console.log(andrew.age);
// console.log(andrew.age);
// console.log(andrew.age);
// // console.log(andrew["calcAge"](andrew.birthYear));

// //CHALLENGE
// console.log(andrew.getSummary());

//CODING CHALLENGE #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
//   );
// } else if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s's (${mark.BMI})`
//   );
// }

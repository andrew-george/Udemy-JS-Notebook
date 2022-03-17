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
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

//test data #1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No one wins!");
  }
}
checkWinner(avgDolphins, avgKoalas);

//test data #2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

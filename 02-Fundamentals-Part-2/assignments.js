// LECTURE: FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//   const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return description;
// }

// const egyptDesc = describeCountry("Egypt", "102", "Cairo");
// console.log(egyptDesc);

// const germanyDesc = describeCountry("Germany", "83", "Berlin");
// console.log(germanyDesc);

// const ukDesc = describeCountry("United Kingdom", "67", "London");
// console.log(ukDesc);

// LECTURE: FUNCTION DECLARATION VS. EXPRESSION
// Declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const egPopulation = percentageOfWorld1(102);
// const DePopulation = percentageOfWorld1(83);
// const ukPopulation = percentageOfWorld1(67);
// console.log(egPopulation, DePopulation, ukPopulation);

// //Expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const egPopulation2 = percentageOfWorld2(102);
// const dePopulation2 = percentageOfWorld2(83);
// const ukPopulation2 = percentageOfWorld2(67);
// console.log(egPopulation2, dePopulation2, ukPopulation2);

// LECTURE: ARROW FUNCTIONS
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const egPopulation3 = percentageOfWorld3(102);
// const dePopulation3 = percentageOfWorld3(83);
// const ukPopulation3 = percentageOfWorld3(67);
// console.log(egPopulation3, dePopulation3, ukPopulation3);

// LECTURE: FUNCTIONS CALLING ANOTHER FUNCTION
// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of the world`;
// }
// console.log(describePopulation("Egypt", 102));

//LECTURE: INTRODUCTION TO ARRAYS
// const populations = [102, 83, 67, 28];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

//LECTURE: BASIC ARRAY OPERATIONS (METHODS)

// const neighbours = ["KSA", "Sudan", "Libya"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// console.log(neighbours);

// neighbours[neighbours.indexOf("KSA")] = "Saudi Arabia";
// console.log(neighbours);

//LECTURE: INTRODUCTION TO OBJECTS
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Arabic",
//   population: 102.3,
//   neighbours: ["Libya", "Sudan", "KSA"],
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//   },
//   checkIsland: function () {
//     this.neighbours.length === 0
//       ? (this.isIsland = "true")
//       : (this.isIsland = "false");
//   },
// };
// //LECTURE: DOT VS. BRACKET NOTATION
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

//LECTURE: OBJECTS METHODS
// console.log(myCountry.describe());
// myCountry.checkIsland();
// console.log(myCountry);

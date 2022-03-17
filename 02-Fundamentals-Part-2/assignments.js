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

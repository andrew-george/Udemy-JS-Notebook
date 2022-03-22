// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [9, 5, 13, 12, 10, 15];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Maximum value is ${max}`);
//   console.log(`Minimum value is ${min}`);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures1, temperatures2);
// console.log(amplitude);

//Debugging
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Celsius')),
//   };

//   console.log(measurement);
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Using a Debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//CODING CHALLENGE
/**
 * *UNDERSTANDING THE PROBLEM
 * ? how to handle errors
 * ? array to string separated by ...
 * ? What is the x Days
 *
 * *BREAKING INTO SUB-PROBLEMS
 * TODO: Make the array
 * TODO: Loop over the array
 * TODO: day counter
 * TODO: string construction
 */

// const temps = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let forecastString = '';
//   for (let i = 0; i < arr.length; i++) {
//     let dayCounter = i + 1;
//     forecastString = `${forecastString}${arr[i]}°C in ${dayCounter} days ... `;
//   }
//   console.log(`... ${forecastString}`);
// };

// printForecast(temps2);

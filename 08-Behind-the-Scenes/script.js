'use strict';

//LECTURE: SCOPING IN PRACTICE
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //reassigning outer scope's variable
      console.log(output);

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}
const firstName = 'Andrew';
calcAge(1991);

/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this 
given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

// function isOldEnoughToDrink(age) {
//     // your code here
//     /* START SOLUTION */

//     /* END SOLUTION */
//   }
console.log(isOldEnoughToDrink(21));
function isOldEnoughToDrink(age) {
    // your code here
    /* START SOLUTION */
    if (age >= 21) {
        return true;
    }
    return false;
    /* END SOLUTION */
}


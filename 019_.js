/*
Write a function called "isOdd".
Given a number, "isOdd" returns whether the given number is odd.
var output = isOdd(9);
console.log(output); // --> true
*/

function isOdd(num) {
    // your code here
    if( num%2 != 0){
        return true;
    }
    return false;
}
console.log(isOdd(80));


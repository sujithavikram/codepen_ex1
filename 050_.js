
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead,
 use this iterative way of solving the problem:

https://www.deltacollege.edu/dept/basicmath/Babylonian.htm
*/

function computeSquareRoot(num) {
    // your code here
    var x = num;
    var y = 1;
    var avg;
    while (x - y > 0) {
   
        x = (x + y) / 2;
        y = num / x;
    }
    return x;

}
var output = computeSquareRoot(121);
console.log(output);
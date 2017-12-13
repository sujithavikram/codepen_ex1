/*
Write a function called "doubleSquareRootOf".
Given a number, "doubleSquareRootOf" returns double its square root.
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/

function doubleSquareRootOf(num) {
    // your code here
    var x = num;
    var y = 1;

    while (x - y > 0) {
        x = (x + y) / 2;
        y = num / x;

    }
    return 2 * (y);
}
var output = doubleSquareRootOf(121);
console.log(output);
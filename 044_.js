/*
Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns 
its perimter.
var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
*/

function computePerimeterOfARectangle(length, width) {
    // your code here
    return (2 * length) + (2 * width);
}
var output = computePerimeterOfARectangle(5, 2);
console.log(output);
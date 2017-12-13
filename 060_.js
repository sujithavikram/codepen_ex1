/*
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:
* You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
*/


function removeFromFrontOfNew(arr) {
    // your code here
    var arrRes = arr.slice(1, arr.length);
    console.log(arr)
    return arrRes;
  
}
var output = removeFromFrontOfNew([1, 2, 3, 4]);
console.log(output);

  
  
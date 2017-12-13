
/*
Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, 
followed by the elementsin "arr2". 
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the "concat" method for this problem.
*/

function joinArrays(arr1, arr2) {
    // your code here
    var resArray;
    console.log(Array.isArray(resArray))
    
    
    resArray = arr1 ;
    console.log(Array.isArray(resArray))
    
    for( var i = 0; i < arr2.length; i++) {
        resArray.push(arr2[i]);
    }
    console.log(Array.isArray(resArray))
    return resArray;

}
var output = joinArrays([1, 2], [3, 4]);
console.log(output);
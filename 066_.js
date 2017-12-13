/*
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

Notes:
* Do not use the || operator.
* Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;
*/

function or(expression1, expression2) {
    // your code here
    // if(expression1 == false){
    //     expression1 = true;
    // }
    // else if(expression2 == false) {
    // expression1 = true;
    // }
    // else if(expression1 && expression2 ){
    // return true;
    // }
    // return false;
    if(expression1){
        return true;
    } 
    if(expression2){
        return true;
    }
    return false;
}
var output = or(true, false);
console.log(output);
  
  
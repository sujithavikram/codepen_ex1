/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a 
value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

// function addProperty(obj, key) {
//     // your code here
  
//   }
var objInput = {
};
    addProperty(objInput , 'myKey' );

  function addProperty(obj, key) {
    // your code here
    obj[key] = true;
    
    console.log(obj[key]);
    
  
  }
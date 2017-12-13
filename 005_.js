/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

// function getProperty(obj, key) {
//     // your code here
//   }
var inputObj = {
    key: 'value',
    'abc': 'xyz',
    qrs: 'tuv',
  };
console.log(getProperty(inputObj ,'key'));
function getProperty(obj, key) {
    // your code here
    return obj[key];
  }

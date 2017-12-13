/*
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
*/

function getAllLetters(str) {
    // your code here
    var arrRes = [];
    for(var i=0; i<str.length; i++) {
        arrRes.push(str.charAt(i)); 
    }
    return arrRes;
}
var output = getAllLetters('Radagast');
console.log(output);

  
  
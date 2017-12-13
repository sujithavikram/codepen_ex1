/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of 
a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
    // your code here
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) === char) {
            console.log(str.charAt(i))
            count++;
            console.log(count)
        }

    }
    return count;

    
}
var output = countCharacter('I am a hacker', '0');
console.log(output);

  
  
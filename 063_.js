/*
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
*/

function getAllWords(str) {
    // your code here
    var resArray = [];
    if(str) { 
    resArray = str.split(" ");
    }
    return resArray;
    

}

var output = getAllWords('a');
console.log(output);

  
  
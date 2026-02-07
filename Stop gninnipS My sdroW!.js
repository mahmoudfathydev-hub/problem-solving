// Stop gninnipS My sdroW!

// Description:
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


// Solution
// 1-Convert String to Array 
// 2-Check of Length More or Equal 5 Letters 
// 3-Reverse This Word 



function spinWords(string) {
    let Array = string.split(" ")
    for(let i = 0 ; i < Array.length ; i++){
        if(Array[i].length >= 5) {
            Array[i] = Array[i].split("").reverse().join("");
        }
    }
    return Array.join(" ")
}

console.log(spinWords("This is another test")); 
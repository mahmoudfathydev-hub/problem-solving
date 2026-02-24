// Split Strings

// Complete the solution so that it splits the string 
// into strings of two characters in a list/array 
// (depending on the language you use). If the string 
// contains an odd number of characters then it should 
// replace the missing second character of the final 
// pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION 
// 1- Check str Even or Odd
// 2- If Even split 2 Letters 
// 3- If odd add "_" and split 2 Letters
// 4- return an Array has all letters
function solution(str) {
    if (str.length % 2 !== 0) str += "_"
    let array = str.split("")
    let arr = []
    if (str.length % 2 === 0) {
        for (let i = 0; i < array.length; i+=2) {
            arr.push(array[i] + array[i + 1])
        }
    } else {
        for (let i = 0; i < array.length; i+=2) {
            arr.push(array[i] + array[i + 1])
        }
    }
    return arr
}

console.log(solution('abc'))
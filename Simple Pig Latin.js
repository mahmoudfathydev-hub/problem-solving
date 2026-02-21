// Simple Pig Latin

// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation 
// marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION 
// 1- Convert str to arr 
// 2- Loop for all words and create wordVar 
// 3- Split all letters then Splice first letter and push it and i--
// 4- Add ay to all words 

function pigIt(str) {
    let arr = str.split(" ")
    let wordArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "!" || arr[i] === "?" || arr[i] === ".") {
            wordArr.push(arr[i])
        } else {
            wordArr.push(arr[i].slice(1) + arr[i][0] + "ay")
        }
    }
    return wordArr.join(" ")
}

console.log(pigIt('Pig latin is cool'))

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
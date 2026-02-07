// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// solution 
// 1-Convert String to Array 
// 2-Create a Varible Vowel = "aeiou"
// 3-Create Counter 
// 4-Check if String Has A Vowel Value



function getCount(str) {
    const Vowel = "aeiou"
    let counter = 0
    let StrArray = str.split("")
    for(let i = 0 ; i < StrArray.length ; i++) {
        if(Vowel.includes(StrArray[i])) {
            counter+= 1
        }
    }
    return counter
}

console.log(getCount("hello"))
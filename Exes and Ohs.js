// Exes and Ohs

// Check to see if a string has the same amount
// of 'x's and 'o's. The method must return a 
// boolean and be case insensitive. The string 
// can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true 
// // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    // let exe = []
    // let oh = []
    // let arr = str.toLowerCase().split("")
    // for(let i = 0 ; i < arr.length ; i++ ){
    //     if(arr[i] == "x") {
    //         exe.push(arr[i])
    //     } else if (arr[i] == "o") {
    //         oh.push(arr[i])
    //     }
    // }
    // if(exe.length == oh.length) {
    //     return true
    // } else if(exe.length !== oh.length) {
    //     return false
    // } else if (exe.length && oh.length == 0) {
    //     return true
    // }


    let xCount = 0
    let oCount = 0

    for (let char of str.toLowerCase()) {
        if (char === "x") xCount++
        if (char === "o") oCount++
    }

    return xCount === oCount
}


console.log(XO("oomxx"))
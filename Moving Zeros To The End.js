// Moving Zeros To The End


// Write an algorithm that takes an array and moves all 
// of the zeros to the end, preserving the order of the 
// other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



// function moveZeros(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             arr.push(arr.splice(i, 1)[0]);
//             i--;
//         }
//     }
//     return arr;
// }

function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}
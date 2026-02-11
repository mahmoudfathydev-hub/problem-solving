// Sum of positive

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20 
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i]
        }
    }
    return result
}

console.log(positiveSum([4, 5, 3, -2, 7, -8]))
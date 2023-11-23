// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

/*
Params:
Arr of nums: [1,2,-3,...] data type: nums
With arr you can loop; starting at 0 index to the end of arr
Use conditional to check if num is positive or negative -> a faster way to check is if arr[i] > 0
Return the sum of all positives, with reduce method
if (arr[i] > 0)
Examples:
[-2,0,4,7,-8] if >= 0 return ... [0,4,7] add arr[i] to the sum variable
*/


//declare a function
function sumOfPos(arr) {
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i]
        }
    }
}


//MY SOLUTION

// function positiveSum(posArr) {
//     let sum = 0 // starting integer
//     for (let i = 0; i < posArr.length; i++) { //create loop for number starting at 0 and account for nums greater than 0 
//     if(posArr[i] > 0) sum += posArr[i] // create conditional, if int > 0 add nums (sum)
//     } return sum //returning sum
// }
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//MY SOLUTION

function positiveSum(posArr) {
    let sum = 0 // starting integer
    for (let i = 0; i < posArr.length; i++) { //create loop for number starting at 0 and account for nums greater than 0 
    if(posArr[i] > 0) sum += posArr[i] // create conditional, if int > 0 add nums (sum)
    } return sum //returning sum
}
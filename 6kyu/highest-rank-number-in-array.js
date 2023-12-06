/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
[2,3,5,5,5,7,7,7]                             -->   7

Data type: 
Array w nums; array[i] will never be undefined

Return => most freq num in arr; if there is a tie, return the greatest num

[4,5,5,6,7,6] // return 6; 
since there is a tie a comparison needs to be made
if array[i] > array[i] return array[i]

Questions:
1. Does array need to be sorted?

Thoughts:
1. Mergesort can be used for this...
2. If num repeats, I could push to new arr; arr[i] === arr[i] arr[i].push(newArr); newArr variable must be created before looping and conditional statement


*/

//Solution with help

function highestRank(arr) {
    // Initialize an empty object to store the count of each element
    let countMap = {};
    // Initialize variables to keep track of the maximum count and the corresponding element
    let maxCount = 0;
    let maxElement = arr[0];
    // Iterate through the array to count occurrences of each element
    for (let num of arr) {
        // Update the countMap for the current element
        countMap[num] = (countMap[num] || 0) + 1;
        // Check if the count of the current element is greater than the maximum count
        // or if there is a tie, check if the current element is larger than the current maxElement
        if (countMap[num] > maxCount || (countMap[num] === maxCount && num > maxElement)) {
            // Update the maximum count and corresponding element
            maxCount = countMap[num];
            maxElement = num;
        }
    }
    // Return the element with the highest count (or the largest element in case of a tie)
    return maxElement;
}





// //MY FIRST ATTEMPT
// function highestRank(arr){
//     let sortedArr = arr.sort((a,b) => a-b) // sort array
//     let repeatArr = [] // create an empty arr to hold repeats
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (arr[i] !== arr[i]) {
//             sortedArr.push(repeatArr)
//         }
//         return repeatArr.reduce((a, c) => a+c)
//     }
//     }

// highestRank([4,5,5,6,7,6])
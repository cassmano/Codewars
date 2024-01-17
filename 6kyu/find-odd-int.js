/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Data type: array of ints
Input: array with ints that contain numbers that appear even # of x, and numbers that appear odd num of times
Output: return the number that appears odd # of times
    - each number will have a match x number of times, 1 number will not have a match; return it
    -.filter can be used to return the number with no match
    - if arr.length = 1 return arr[i]
    - can % 2 === 0 work here? the instances of element % 2 !== 0 return it
Example:
[1,1,2]
if arr[i]==arr[i] ignore it



*/

function findOdd(A) {
    // filter the item where element % 2 !== 0 (which means the element appears an odd num of x)
        // declare a var to return later
    const odd = A.filter((element, item, array) => array.filter(item => item === element).length % 2 !== 0)
    // since odd is in an array, return only one num in the arr
    return odd[0]
    // console.log(odd)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5))
console.log(findOdd([10], 10))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10))
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1))

//PROBLEM 3:
//create a function that takes in arr 
// function findUniqueSum(arr) {
//     //filter items by their index if index = index it is pointing to the same element
//     let odd = arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
//     console.log(odd) // returns 6,9,8
//     }
    
//     findUniqueSum([1,2,2,3,3,3,4,3,3,3,2,2,1])
//     findUniqueSum([7])
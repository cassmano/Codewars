/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

Hint:  You have full control over a and b inside the sort method

Input: String 
O: Array of words (convert string to arr with split), in alphabetical order by the FINAL character in each word (lastIndexOf?), need also to look at second to last index of if both end in the same character; sort method required for alphabet (UTF or char)

*/
//PROBLEM 1
//create func that takes in string
function sortByLastIndex(str) {
    // convert the string to arr of words, space req
    let arr = str.split(' ')
    // console.log(arr)
    //use sort method order the arr... by last index... or length - 1 to get to end of word; had to look at leons solution to target last index
    let sorted = arr.sort((a,b) => b.charCodeAt(b.length-1) - a.charCodeAt(a.length -1)) // b - a , descending order... how? 
    console.log(sorted)
}
console.log(sortByLastIndex('I am drinking coffee')) // am coffee drinking I


/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Hint:  reduce the array adding each value to get a sum and make sure the current value is treated as a Number by using Number()

Params:
Array integers data types: strings and numbers 
Convert string data type to number data type because you can't add strings Number()

Return:
Returning the sum of nums in array
Reduce method 

Examples:
assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 

Pseudocode 

*/

//PROBLEM 2:
//create a func that takes in an arr (that holds ints as strings and nums)
function sumOfArr(arr) {
// console.log(arr) // strings and nums 
//convert the strings in arr to number using map method to iterate through each element
let numArr = arr.map(i => Number.parseInt(i))
// console.log(numArr)
//use the reduce method to add all elements in arr; this is the sum
let sum = numArr.reduce((a, c) => a+c, 0)
// console.log(sum)
return sum
} 
sumOfArr([1,'3',4,'10'])



/*
You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)

P:
Array -> data types nums!

Return: the sum of nums that occur only once (nums that don't repeat)

E:
[2,2,5,5,6,9,8] -> duplicates: 2, 5 // unique: 6, 9, 8 // return 23
filter to create new arr of singles; condition: arr[i] !== arr[i] when doing this method create a var
    // on hold: create empty array to hold unique? if that's the case, we can push arr[i] to uniqueArr
once we have uniqueArr we can use the reduce method to get sum

P
*/

//PROBLEM 3:
//create a function that takes in arr 
function findUniqueSum(arr) {
//filter items by their index if index = index it is pointing to the same element
let unique = arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
console.log(unique) // returns 6,9,8
let sum = unique.reduce((a,c) => a+c, 0)
console.log(sum) // returns sum!
return sum
}

findUniqueSum([2,5,6,2,5,9,8])

/* Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

Task: in each array, make a new unique array (essentially, loop through each array and grab 1 element to make a new array combo)

Data type: 
subarrays with nums
arrays may contain duplicate nums, only count 1!

R: unique arrays formed with elements from each subarray

E: ([[1,2],[4,4],[5,6,6]]) = 4 // [1,4,5] [1,4,6] [2,4,5] [2,4,6]
use filter method to count 1 num in that arr => [[1,2],[4,4],[5,6,6]] => [[1,2],[4],[5,6]]

P
*/

//PROBLEM 4:
//create a func that takes in an arr of subarrays
function uniqueArr(arr) {
    //use map to loop through each element in arr
    //new Set creates a new array with a no duplicates
    let newParent = arr.map((e) => new Set(e));
    let result = 1
    for (let e of newParent) {
        result *= e.size;
    }
    console.log(result)
}

//leons method
const solve = arr => arr.reduce((a,c) => a * new Set(c).size, 1)


uniqueArr([[1,2],[4,4,8],[5,6,6]]) // 8 combos

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Hint: map through array checking if indexof == lastindexof and return the appropriate character

Task: Convert a string to a new string where each character in the new string is "(" or ")" 
do "(" if that character appears 1x in the original string
do ")" if that character appears more than 1x than once in the original string (duplicates)
ignore capitalization when determining if a character is a duplicate -> to lowercase

I: String char includes letters and symbols!
O: ( singles or ) duplicates, # of () is = # of original characters

froggy => ((())(
1. ['f','r','o','g','g','y'] .split('') to make the string iterable, declare arr var
2. filter through each element and determine if index is a single or repeat (like question 3) arr.filter(i => indexOf(i) === lastIndexOf(i)), declare var
*/

//PROBLEM 5:
function makeSymbols(str) {
    //turn string to lowercase and split it
    let strToArr = str.toLowerCase().split('')
    //use map to iterate over each element and assign it a ( or )
    //map params are currentval, index, and arr
    let newString = strToArr.map((c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')').join('') // makes it into a string again as symbols
    return newString
}

console.log(makeSymbols('froggy'))


/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out "Fizz"; when it's divisible by 5, print out "Buzz"; when it's divisible by both 3 and 5, print out "Fizz Buzz".

Hint: Loop with conditionals that use modulus

Data type:
i: nums > 1 , cannot be less than 1
o: "Fizz" if divis by 3, "Buzz" if divis by 5, 3&5 "Fizz Buzz"
Questions: what does print out mean?
conditional statement req

*/

//PROBLEM 6:
//create a func that takes in a num
function fizzbuzz(n) {
    //loop 1 to infinite num (no end denoted)
    for(let i = 0; i <= n; i++) {
    if (n % 3 === 0 & n % 5 === 0) {
        return "Fizz Buzz"
    } else if (n % 3 === 0) {
        return "Fizz"
    } else if (n % 5 === 0) {
        return "Buzz"
    } else {
        return n
    }
    }
}

console.log(fizzbuzz(15)) // "Fizz Buzz"
console.log(fizzbuzz(3)) // "Fizz"
console.log(fizzbuzz(5)) // "Buzz"
console.log(fizzbuzz(7)) // 7

// Part I
// Write the code necessary to do the following:

// Create an empty array called arr.
let arr = []
// Add your first name to the arr variable
arr[0] = 'Cassandra'
// Add your last name to the end of the arr variable
arr[1] = 'Mano'
// Add your favorite color to the beginning of the arr variable
console.log(arr.unshift('green'))
// Your variable arr should look like this (using Elie for a first name, Schoppik for a last name and purple for a favorite color) ["purple", "Elie", "Schoppik"]. Keep going!

// Remove the favorite color from the arr variable (remember this is the first value in the array – what method can you use to remove the first value in an array?)
console.log(arr.shift())
// Create another array called arr2.
let arr2 = []
// Add your favorite number to arr2
arr2[0] = 10
// Add the string “JavaScript” to the end of the arr2 variable
arr2.push('JavaScript')
console.log(arr2)
// Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].

// See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?
console.log(arr2.indexOf(10)) // returns -1 if not found in array

// Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
let combinedArr = arr.concat(arr2)
console.log(combinedArr)
<<<<<<< HEAD
// Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]

// Part II
// Complete the following, starting from the following array: 
let partTwo = ["JavaScript", "Python", "Ruby", "Java"]

// Return the following array: ["Python", "Ruby"].
// let returnedArr = partTwo.splice(1,3)
// // Combine the array with the array ["Haskell", "Clojure"].
// let otherArr = ['Haskell', 'Clojure']
// let newArr = returnedArr.concat(otherArr)
// console.log(newArr)
// Return the string "JavaScript, Python, Ruby, Java".
console.log(partTwo.toString(" "))
// Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.
// Before you continue!
// Before you move on, check your understanding and make sure you can answer yes to the following questions:

// Do I know how to create an array? You can create a var then add to the arr by using indexes or js methods
// Do I know how to add an element to the beginning of an array? unshift
// Do I know how to add an element to the end of an array? push
// Do I know how to remove an element from the end of an array? pop
// Do I know how to remove an element from the beginning of an array? shift 
// Do I know how to remove an element from a specific index in an array? i can use splice 
// Do I know how to add one or more elements at a specific index in an array? splice, by targetting first index, ending index, and the other params will be what im adding in
// Do I know what the includes function does? checks if the array item exists
// Do I know what the indexOf function does? returns index of element
// Do I know the difference between includes and indexOf? includes returns a boolean, indexOf returns a number (the index of the element)
// Do I know why [] === [] always returns false? it's never the original array, but a shallow copy
>>>>>>>>> Temporary merge branch 2

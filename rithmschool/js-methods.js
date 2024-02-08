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
// Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]
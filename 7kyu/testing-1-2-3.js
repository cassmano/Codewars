/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

Input: Array of strings, data type: string, letters
Output: Array of strings, with number incr with colon

["a," "b", "c"] -> (n:) in front -> array.map((item) => item.unshift(`${n:(item)}))
for (let n=1; i < n.length; n++ ) {
    return the mapped through item, so assign it as a variable
} 

*/

//ACTUAL SOLUTION
var number=function(array){
    //start count at 1
    let n = 1
    // map through each item in array, use template literal to create a new string with {n}: in front of {item}
    const newArr = array.map((item) => (`${n++}: ${item}`))
    // return the answer of the map so store it in a variable
    return newArr
}

// MY SOLUTION
/*

Why it doesn't work:
    1. .map returns a new array, you don't need to use unshift (which modifies original array); so you can use a template literal directly to return a new array
    2. you don't need to manually loop through to increment n, you can just do n++ which starts at 1

var number=function(array){
    let n = 0
    // map through array, use unshift method to add 'n:' in front of the item in the array
    const newArr = array.map((item) => item.unshift(`${n}:{item}`))
    // everytime you iterate through an item with map, n increments by 1 like '1:' '2:' '3:'
    for(let n=1; i < n.length; n++) {
        return newArr
    }
}
*/
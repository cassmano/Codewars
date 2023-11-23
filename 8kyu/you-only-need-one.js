/* You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not. */

/*
Params:
- Array: for loop with conditional
- X: value in the array (data types: number or strings)
Return:
- arr has value (x) -> true, else-> false
Example:
[,,]-> false
[1,2,3]-> true
[1, 2, dog]-> true
*/

//declare a function that will check array and val x
function check(arr, x){
    //use a for loop to iterate through array
    for (let i = 0; i < arr.length; i++ ) {
    //if any index in the array === x 
    if (arr[i] === x) {
    //return true inside conditional
        return true
    } 
    } //else return false outside of conditional
    return false
}

//My solution
// function check(arr, x) {
//     //use includes method; will always return boolean so no if/else needed
//     return arr.includes(x)
// }
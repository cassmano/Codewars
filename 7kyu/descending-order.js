/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



Params- non-neg int > 0, need an array to manipulate order using sort to put highest num first, then join array
Return- highest number order
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

//Create func called descending order
function descendingOrder(n){
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

//wrapped in Number() to ensure the returned func is an int and not a string; used n.toString to ensure that 'n' is a string before it gets converted to an array with split method
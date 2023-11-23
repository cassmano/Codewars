//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

/*
Params: given number (givenNum) passed in func params
Data type: number, odd or even
If givenNum % 2 === 0 (has no remainder) it is even -> multiply by 8
Else if givenNum % 2 !== 0 (has a remainder) it is negative -> multiply by 9
Example:
8 % 2 === 0 true, mult by 8
9 % 2 === false, there is a remainder -> mult by 9
*/

function multEightNine(givenNum) {
    if (givenNum % 2 === 0) {
        return givenNum * 8
    } else if (givenNum % 2 !== 0) {
        return givenNum * 9
    }
}

// Ternary attempt
function multEightNine(givenNum) {
    return givenNum % 2 === 0 ? givenNum * 8 : givenNum * 9
}



// //My solution
// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return(number*8)
//     } else {
//         return(number*9)
//     }
//     }
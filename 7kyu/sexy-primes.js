// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

// Examples
// 5, 11   -->  true ( 5 + 6 = 11)
// 61, 67  -->  true 
// 7, 13   -->  true
// 5, 7    -->  false ( 5 + 6 =/= 11)
// 1, 7    -->  false  (1 is not a prime)
// Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.

/*
Params:
Data type: x & y > 0, singular value; not in an array; always 2 ints, any amount of digits, must be prime not even (x, y % 2 will always have a remainder)
Small num is not always first. Use the sort to order from least to greatest
See if smallest num + 6 = greatest num

Conditional statement: if x + 6 = y return true (sexy) else return false 

Examples: 
        (5, 11),true) 5 + 6 = 11
        (13, 19),true) 13 + 6 = 19
        (83, 89),true) 83 + 6 = 89
        (1, 11),false) 1 + 6 =/= 11 
*/

//This is the first func
function sexy_prime(x, y) {
    //if x and y are prime nums
    if (isPrime(x) && isPrime(y)) {
        //math abs returns absolute val; basic mathematical op 
        return Math.abs(x - y) === 6; // true
    } else {
        return false;
    }
}
//This second func will define what is prime
function isPrime(num) {
    //since 1 is not a prime num
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false // this means it is not prime, since num (x,y) % 2 !== 0
        }
    }
    return true
}


// This func passed all basic tests but, passed 89 tests and failed 23 because it doesn't account for 1 !== prime
// function sexy_prime(x, y){
//     if ( x + 6 == y || y - 6 == x) {
//         return true
//     } else if ( x + 6 !== y || y - 6 !== x) {
//         return false
//     } else {
//       return false
//     }
// }
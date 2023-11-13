// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

/* 
Params:
Data type: numbers > 0 in ARRAY (loop); where 1: initial val, n: is last value (n.length). 
Obj: Array, need to create a new array to store new values where f, b, fb replaces nums
Conditions: REPLACE certain values; multiples of: 3 ( n % 3 === 0) Fizz, 5 ( n % 5 === 0) Buzz, multiples of 3 and 5 (&& === 0) Fizzbuzz, =/= 3 ror 5 use else; using strict equality op (===) because type and val have to be the same num = num ; num = str
*/

function fizzbuzz(n) {
    let newArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            newArr.push("Fizz")
        } else if (i % 5 === 0) {
            newArr.push("Buzz")
        } else {
            newArr.push(i)
        }
    }
    return newArr;
}
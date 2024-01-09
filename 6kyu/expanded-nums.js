/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

Params:
number with any digit

Return
String that adds nums together with '+' ; template literal? `${} + ${} + ...`

Example:
12 => 10 + 2
How: if arr[i] = 1 return arr[i], if arr[i]= 2 return `${arr[0] + 0} 

*/

function expandedForm(num) {
    return num
    // convert num to string so it can be manipulated
    .toString()
    // split string to individual digits
    .split('')
    // iterate through digits using map
        // if digit does not equal zero, take the digit and add 0 until you get the end of the nums length : else, if digit = 0 replace 0 with null (placeholder)
    .map((digit, index, arr) => digit !== '0' ? digit + '0'.repeat(arr.length - 1 - index) : null)
    // filter and remove Num place holders
    .filter(keepNum => keepNum !== null)
    // Join the items back together in string with '+'
    .join(' + ')
}

/*
EXPLANATION OF REPEAT

arr.length - 1 - index: This expression calculates the remaining length of the array to the right of the current digit. It represents the number of zeros needed to represent the place value of the current digit.
Here's a breakdown for the example expandedForm(70304):

For the first digit '7' at index 0: '0'.repeat(5) creates '00000', representing the place value of 7 as 70000.
For the second digit '0' at index 1: Since it's '0', repeat is not needed (hence null is returned).
For the third digit '3' at index 2: '0'.repeat(3) creates '000', representing the place value of 3 as 300.
For the fourth digit '0' at index 3: Again, not needed (hence null is returned).
For the fifth digit '4' at index 4: '0'.repeat(0) creates an empty string, as the place value of 4 is just 4.

*/
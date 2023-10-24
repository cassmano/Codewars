// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//MY SOLUTION
function reverseLetter(str) {
    // Replace method works on strings; replace all nonalphab with empty string
    let lettersOnly = str.replace(/[^a-zA-Z]/g, '')
    // Reverse the resulting string; split to manipulate array, reverse to change order, join to bring together again
    let reversed = lettersOnly.split('').reverse().join('');
    return reversed;
}
/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

const {assert} = require("chai");

it("example tests", () => {
    assert.strictEqual(solution(""), "");
    assert.strictEqual(solution("camelCasing"), "camel Casing");
    assert.strictEqual(solution("camelCasingTest"), "camel Casing Test");
});

Input: string with no spaces
Output: String with space, if it is two words
How to determine where to put space: if preceding letter is a capital

"camelCasing" .find(/[A-Z]/).split('')

*/

//ACTUAL SOLUTION
function solution(string) {
        // Split the string into an array of characters
        let toArr = string.split('');

        // Use map to add a space before each capital letter
        let breakCamel = toArr.map(char => (char.match(/[A-Z]/) ? ` ${char}` : char)).join('');
    
        return breakCamel;
}
console.log(solution('camelCasingBreaksNow'))

/* Why my solution doesn't work:
I am trying to use the match method on char, but char is undefined; it should be used on toArr (the split string) which char=item in arr. 

In the array, you map over each letter, if the letter is a capital (using regex capital letters), ternary op puts a space in front. Then the array is joined to create a string again.

*/

//MY SOLUTION
// function solution(string) {
//     //create a variable for capital letters
//     let toArr = string.split('')
//     console.log(toArr)    
//     //define capital letters using regex
//     let capital = char.match(/[A-Z]/)
//     //map through array and add a space before the capital letter and join to turn back into a string
//     let breakCamel = toArr.find(capital).join()
//     return breakCamel;
// }



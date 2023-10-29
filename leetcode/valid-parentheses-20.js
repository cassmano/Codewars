/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()" => true
Input: s = "()[]{}" => Output: true
Input: s = "(]" => false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValid(s) {
    //create a stack data structure
    let stack = []
    //create a hashmap for efficient lookup 
    let hashMap = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    //loop through the string and push onto stack
    for (let i = 0; i < s.length; i++) {
        // if next item is any opening bracket, push it to the stack
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else {
            //else (if it is NOT an opening bracket, it IS a closing bracket) pop previous val off stack
            let opening = stack.pop()
            //now, compare the closing character with the hashmap lookup; if hashmap opening does not contain closing item return false because they don't match
            if(hashMap[opening] !== s[i]) {
                return false
            }
        }
    }
    //return the base case; an empty string
    return stack.length === 0
}

console.log(isValid("(){}[]"))
console.log(isValid("(){}]"))
console.log(isValid("()[{}]"))

//ORIGINAL SOLUTION THAT DOESNT WORK
//var isValid = function(s) {
    //loop (for / of) through string (s) 
//     for (let character of s ) {
//         if (character === (character+1)) {
//             return true
//         } else {
//             return false
//         }
//     }
// };
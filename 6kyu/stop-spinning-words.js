/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

Input: string of words consisting only of letters
    -string can be 1 word only
    -condition: if the word.length has >= 5 letters it needs to be reversed
Output: same string, if word.length < 5 return word, if word.length >= 5 return word.reversed(), 
    -then need to be joined into a string
    -can try map, but it returns a new array? however, we can do .toString() on arr and make it = to string

*/

function spinWords(string){
    //split the string by spaces to convert to array
    let Arr = string.split(" ")
    console.log(Arr)
    //take the string of words and map over each word to determine the length
        // start with simple condition, if it's not that, simply return the word after the ternary
        // if the word's length is >= 5 characters take the word, split it to be able to manipulate it, and join it together again to create a string of that word
    let reversing = Arr.map((word) => word.length >= 5 ? word.split("").reverse().join("") : word )
    console.log(reversing.join(" "))
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Oh heck I can't believe I solved this problem on my brain power alone"))
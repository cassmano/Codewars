/*

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

Params:
string, in all lowercase
each letter = placement in alphabet; need to split the string to each word  with space.split(' ') ['cute' 'cat'] get each letter by itself: .split('') ex ['c','u', 't', 'e'] ['c','a','t'] 
iterate through each index and assign a value according to alphabet placement do .map to return new array with values replacing letters; 
a for loop for alphabetPosition i = 1; i <= 26; i++  */

// function high(x){
//   let sepByWord = x.split(' ')
//   let wordScores = []
//   //iterate through the array of words
//   sepByWord.forEach(word => {
//     let letterVals = word.split('').map(letter => letter.charCodeAt(0) -96)
//     let calcWordScore = letterVals.reduce((a, b) => a + b, 0)
//   })
//   let findHighest = Math.max()
//   let findIndexOfHighest = wordScores.indexOf(findHighest)
//   return wordScores[findIndexOfHighest]
// }

function high(x) {
    let sepByWord = x.split(' ') // convert string to array separated by commas
    let wordScores = [] // create variable to hold array of scores
    // Iterate through the array of words
    sepByWord.forEach(word => { //for each word
      let letterVals = word.split('').map(letter => letter.charCodeAt(0) - 96) //split each word by letter, return new arr where at each letter, you are assigning a value 1-26 (use -96 since char code for lower case a starts at 97)
      let calcWordScore = letterVals.reduce((a, b) => a + b, 0) // now that each letter has a val in its place use reduce to calculate
      wordScores.push(calcWordScore) // Push the calculated score to the array
    });
    let findHighest = Math.max(...wordScores) // Find the highest score using spread operator ... i.e. all the word scores vals are in there and Math.max is finding the highest val
    let findIndexOfHighest = wordScores.indexOf(findHighest) // In the array wordScores, we are using the value from findHighest to return the index of the highest score
    return sepByWord[findIndexOfHighest]; // Finally, we are taking the index from findIndexOfHigest to locate the actual word in the origial array
}
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

/*
Params: string
I: String
O: object, key value pair; create a variable that holds an empty object {}
turn string to arr (create name for arr) so it can be evaluated 
Example: 'cassandra' => ['c', 'a', 's', 's', 'a', 'n', 'd', 'r', 'a'] // return {'c': 1, 'a': 3, 's': 2, 'n': 1, 'd':1, 'r': 1}
use filter to iterate through array; count instances of letter popping up. push the letter to the object and count the instances of the letter.
string.filter(letter => letter.indexOf() === letter.lastIndexOf()) {
    return object[letter].push()
}
*/

function count(string) {
    // create object that will hold values of repeat characters
    let repeatObj = {};
    // take string and turn it into an array
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        // check if the character is already a property in repeatObj
        if (repeatObj.hasOwnProperty(arr[i])) {
            // if yes, increment the count
            repeatObj[arr[i]]++;
        } else {
            // if not, add the character as a property with count 1
            repeatObj[arr[i]] = 1;
        }
    }
    return repeatObj;
}

console.log(count('cassandra'));

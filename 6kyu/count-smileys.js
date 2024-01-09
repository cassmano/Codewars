/*Given an array (arr) as an argument, complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

Params:
- data type: array of symbols and capital letter D, specifically: :) :D ;-D :~)
- these symbols should be consecutive, template literal?
- actions: loop through arr, or use a method "find" or "filter"
- Q: are the items in the arr already separated?
Return: number (counting smileys)
Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

//complete func countSmileys with arr as an arg
function countSmileys(arr) {
    //Define valid smileys that can exist
    const validSmileys = [
        ":)",
        ":D",
        ":-)",
        ":~)",
        ":-D",
        ":~D",
        ";)",
        ";D",
        ";-)",
        ";~)",
        ";-D",
        ";~D",
    ]    
    //inspect the arr to see if there are consective smileys next to each other and return the length of the arr
    return arr.filter((item) => validSmileys.includes(item)).length
    
}




/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

//MY SOLUTION
/*Current landscape
1. numbers is a str w spaces
2. numbers are in random order
*/
function highAndLow(numbers){
    //convert string to array with split method separate elements with space
    let newArr = numbers.split(' ')
    //reorder array from lowest to highest with sort method 
    newArr.sort(function(a, b){
        return a - b
    })
    //now that array is sorted L-H, first index will always be smallest int last index will always be largest int
    //create a variable for index 0 and last index
    let lowest = newArr[0]
    let highest = newArr[newArr.length - 1]
    //output must be two nums separated by a space with highest num first
    return highest + ' ' + lowest
    }
//Given an array a that contains only numbers in the range from 1 to a.length, 
//find the first duplicate number for which the second occurrence has the minimal index. 
//In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

/*Input - array of its, where there are duplicates
Examples
For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
    -There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
For a = [2, 2], the output should be solution(a) = 2; // only one duplicate

For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1. // no such elements
*/

function solution(a) {
    //create a variable to make a new set
    let newSet = new Set()
    //loop through original array, and add it to the set
    for (let i = 0; i < a.length; i++) {
        //check for repeats
        if (newSet.has(a[i])) {
            return a[i]
        }
        //if the set does not have the num put it in
        newSet.add(a[i])
    }
    // no dupes
    return -1
}

console.log(solution([2, 1, 3, 5, 3, 2]))
console.log(solution([2,2]))
console.log(solution([2, 4, 3, 5, 1]))
console.log(solution([4,2, 4, 3, 5,2, 1]))
/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
the output should be

solution(a) =
    [[7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]]

*/

function solution(a) {
    //create empty arr to hold the values of rotated nums
    let rotatedArr = []
    //take original array and delegate it out
        //index 1 should become last in arr
        //index 2 should becomme middle in arr
        //index 3 should become first in arr
    //use map to iterate
    
}

console.log(solution([[1,2,3], [4, 5, 6],[7, 8, 9]]))
console.log(solution([[7, 4, 1], [8, 5, 2],[9, 6, 3]]))
// // Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false. There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

function solution(sequence) {
    let removedElement = false;
    
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            if (removedElement) {
                return false;
            }
            removedElement = true;
            
            // Check if removing current element makes sequence strictly increasing
            if (i > 0 && sequence[i - 1] >= sequence[i + 1]) {
                // If removing current element doesn't help, check next pair
                if (i < sequence.length - 2 && sequence[i] >= sequence[i + 2]) {
                    return false;
                }
            }
        }
    }
    
    return true;
}

//this doesnt work
// function solution(array) {
//     //declare a variable for duplicate
//         //initiating at zero
//     let duplicate = 0
//     //sort the array
//     let sortedArr = array.sort((a,b) => a-b)
//     console.log(sortedArr)
//     for (let i = 1; i<sortedArr.length;i++) {
//         if (sortedArr[i] === sortedArr[i+1]) {
//             duplicate +=1
//         } else if (duplicate > 1 ) {
//             return false
//         }
//     }
// }

console.log(solution([1,3,2]))
console.log(solution([1,3,2,1]))

// Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.


//Example
// For a = [10, 2], the output should be solution(a) = 1344.

// a[0] ∘ a[0] = 10 ∘ 10 = 1010,
// a[0] ∘ a[1] = 10 ∘ 2 = 102,
// a[1] ∘ a[0] = 2 ∘ 10 = 210,
// a[1] ∘ a[1] = 2 ∘ 2 = 22.
// So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

// For a = [8], the output should be solution(a) = 88.


function solution(a) {
    //declare a var for the sum of all combos
    let sum = 0
    //iterate through array and have pointer on first element
    for (let i = 0; i < a.length; i++) {
        //iterate through same array with second pointer to get all indices combos
        for (let j = 0; j < a.length; j++) {
            //take each index and concat, then change to integer
            sum += Number(a[i].toString() + a[j].toString())
        }
    }
    return sum;
}

console.log(solution([10,2]))
console.log(solution([8]))
console.log(solution([1,2,3]))
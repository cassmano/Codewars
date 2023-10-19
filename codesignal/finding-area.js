// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// For n = 2, the output should be
// solution(n) = 5
// For n = 3, the output should be
// solution(n) = 13
// For  n = 4 solution(n) = 25

//input: an integer
//output: an integer that gives area of input


// n = 2 => 5, 2 * 2 + 1 = 5
// n = 3 => 13, 3 * 4 + 1 = 13
// n = 4 => 25, 4 * 6 + 1 = 25
// n = 5 => 41, 5 * 8 + 1 = 41
// n = 6 => 61, 6 * 4 + 1 = 61
// n = number => total = n + n[i+1]


function solution(n) {
    let area = 1
    for (let i = 0; i < n; i++) {
        area += i * 4
    }
    return area
}

console.log(solution(2))
console.log(solution(3))
console.log(solution(4))
console.log(solution(5))
console.log(solution(6))
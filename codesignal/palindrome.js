function solution(inputString) {
    toArray = inputString.split('').reverse().join('')
    console.log(toArray)
    if (toArray === inputString) {
        return true
    } else {
        return false
    }
}

console.log(solution('cheese'))
console.log(solution('monday'))
console.log(solution('racecar'))
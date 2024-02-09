/*
Return the century the number is in
I - positive ints
O - positive ints; data type: number!
Example: 
1697 -> 17
1903 -> 20
2023 -> 21
Possible methods: .split() -> [2,0,2,3] .slice()
*/

// function solution(year) {
//     //take the int and convert it to a string, then use the split method on string to turn into array
//     let twoDigits = String(year).split('').slice(0,2).join('')
//     let century = (Number(twoDigits)+1)
//     return century
// }

//optimal with math object using ceil function which rounds up by 1 digit 

function solution(year) {
    if (year <= 100) {
        return 1; // Return 1 for years within the range of the first century
    }

    let firstTwoDigits = Math.ceil(year / 100); // Calculate the century based on the first two digits
    return firstTwoDigits;
}


console.log(solution(1697))
console.log(solution(1903))
console.log(solution(2023))
console.log(solution(2313))
console.log(solution(1523))
console.log(solution(301))

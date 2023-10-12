// My solution

function solution(str){
    let makeArr = str.split("") //used split to convert string to array
    // console.log(makeArr) // string: world to array: ['w', 'o', 'r', 'l', 'd']
    makeArr.reverse() // this will reverse array
    let newArr = makeArr.join("") // this will join the reversed array
    return newArr.toString() // this will return a string of the reversed array
}

//Fast solution
// function makeArr(str) {
//     return str.split("").reverse().join("")
//     }

//Fast solution arrow function
//let makeArr = str => str.split("").reverse().join("")
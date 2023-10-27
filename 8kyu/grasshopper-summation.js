//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//function expression
let summation = function (num) {
    //create a variable where you're adding to a base num
    let startingNum = 0
    // there's one value and you need to add each incrementing value ex 1+1 should be 2, 1+2, 3
    //for let loop let's you increment each value
    for (let i = 1; i <= num; i++) {
        startingNum += i
    } return startingNum
}

  //P parameters positive integers only, that need to be added
  //R return will return a new summation of all nums
  //E examples 
  //P pseudocode steps
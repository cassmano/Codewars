/*Your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
Write a function that tells you if it is possible to get to the pump or not. 
Function should return true if it is possible and false if not.*/

/*
Params: 
-data type: number 1gal = 25 miles. 2gal left. Nearest gas station is 50 miles away.
-conditional statement: if gas station is less than or equal to (<=) 2 miles -> return true; else if greater than 2 miles away -> return false; 
-pass through to check in func 1. distance (50), mpg (25 miles), galLeft(2); if galLeft * mpg > 50 false; else if galLeft * mpg <= 50 return true, they will make it
let pump (this is not a fixed number)
Return: true is possible else false if not
Examples: 
mpg * distance
25 * 1-2 = <= 50 true
25 * 3 = 75 false 

*/
function gasPossible(distance, mpg, galLeft) {
  if ((mpg * galLeft) >= distance) {
    return true
  }
  return false
}

// //My solution
// function zeroFuel(milesAway, milesPerGal, galLeft){
//     if ((milesPerGal * galLeft) >= milesAway) {
//       return true
//     } else {
//       return false
//     }
//   }

// //Best practice
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump/mpg <= fuelLeft
//   };
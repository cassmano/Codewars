//Your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.

//My solution
function zeroFuel(milesAway, milesPerGal, galLeft){
    if ((milesPerGal * galLeft) >= milesAway) {
      return true
    } else {
      return false
    }
  }

//Best practice
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };
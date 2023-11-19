//Create a function that checks if the first argument n is divisible by all other arguments 
//(return true if no other arguments)

/*
Params: n = first arg, 'all other args' -> infinite number of params? -> create an array that holds values
Since array, need to loop through them and get the [i] and % with n
if n % otherArgs[i] does not equal zero, return false, but if === 0 return true
Return: true if n % all other args !== 0
*/
function isDivisible(n, ...otherArgs) {
    for (let i = 0; i < otherArgs.length; i++) {
      if (n % otherArgs[i] !== 0) {
        return false; // Return false if not divisible
      }
    }
  
    return true; // Return true if divisible by all elements
  }
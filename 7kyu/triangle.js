/*Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

//my solution
function isTriangle(a,b,c){
    if ( a === 0 || b === 0 || c === 0) { 
        return false // a triangles must have surface > 0 to be accepted, since = 0, return false
    } else if ( a + b <= c) {
        return false // if 2 sides are less than one side, triangle cannot be created
    } else if ( a + c <= b) {
        return false
    } else if ( b + c <= a) {
        return false // no other if/else statements possible with 3 sides so return true
    } return true 
    }
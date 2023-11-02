// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases


//Params exam grade (exam); completed proj (projects) these will hold future values that will take arguments exam int 0-100, prjct int > 0
//Return final grade as an integer; what determines grade will be conditional statements
    //since returning "final grade" need to make a variable that will hold the return
function finalGrade (exam, projects) {
    //create variable to hold/return final grade 
    let finalMark = 0
    //conditional statements to determine what grade will be
    if (exam > 90 || projects > 10) {
        return finalMark += 100
    } else if ( exam > 75 & projects >= 5) {
        return finalMark += 90
    } else if (exam > 50 & projects >= 2) {
        return finalMark += 75
    } else {
        return finalMark
    }
}
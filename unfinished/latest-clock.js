/*
Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)

Input: numbers 0-9
Output: string, with latest time in front of digit. 
How to get from I to O, 00:00-12:59 = AM; 13:00-23:59 = PM
Split the problem up into 2 parts HH's and MM's
Allowable combos for HH: 00-23 // latest combos 13-23
Allowable combos for MM: 00-59 // 

digits: 1a, 7b, 9c, 3d => result  19:37 7:37PM

split HH from MM (determine allowable combinations)
then join 

*/

function latestClock(a, b, c, d) {
    //declare a variable to hold hours
    let hours
    //define possible hours

}

console.log(latestClock(1, 9, 8, 3, "19:38")) // 7:38
console.log(latestClock(9, 1, 2, 5, "21:59")) // 9:59
console.log(latestClock(1, 2, 8, 9, "19:28")) // 7:28
console.log(latestClock(0, 0, 0, 0, "00:00")) // 12:00 midnight
console.log(latestClock(2, 4, 0, 0, "20:40")) // 8:40
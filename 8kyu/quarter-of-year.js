/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12 
*/

/*
Data type: ints (all nums), month <= 1 and <= 12 (since there are 12 months)
1,2,3 = q1; 4,5,6 = q2; 7,8,9 = q3; 10,11,12 = q4
Given a month, 
*/

function returnQuarter() {
    if (month >=1 && month <= 3) {
        return 1
    } else if (month >=4 && month <= 6) {
        return 2
    } else if (month >=7 && month <= 9) {
        return 3
    } else if (month >=10 && month <=12) {
        return 4
    }
}





// //My solution
// const quarterOf = (month) => {
//     if (month <= 3) {
//     return 1
//     } else if (month >= 4 && month <= 6) {
//     return 2
//     } else if (month >= 7 && month <= 9) {
//     return 3
//     } else if (month >= 10 && month <= 12) {
//     return 4
//     } 
// }
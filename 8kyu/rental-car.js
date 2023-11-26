/*After a hard quarter in the office you decide to get some rest on a vacation. 
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.


Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).

Params: 
days (d) car is rented 
base cost $40
total cost 
if days >= 7 days, total cost - 50 off
if days >= 3 days, total cost -20 off
else d * 40
conditional statement

Return: total - 50, total - 20

Example: 
2 * 40 = $80
3 * 40, 6 * 40 = 120 - 20, 240- 20
7 * 40 = 280 - 50
*/

function rentalCost(d, dailyCost, total){
    let dailyCost= 40
    let total = d * dailyCost
    if (d >= 3) {
        return total - 20
    } else if (d >= 7) {
        return total - 50
    } else {
        return total
    }
}


// //My solution
// function rentalCarCost(d) {
//     let dailyCost = 40
//     let totalCost = dailyCost * d
//     if (d >= 7) {
//         return totalCost - 50
//     } else if ( d >= 3) {
//         return totalCost - 20
//     } else {
//         return totalCost
//     }
// }
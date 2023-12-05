// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

/*
Params:
Input: 4 digit string
Output: String denoting century 

Example:
"1999" 
.split('') to turn into array => [1, 9, 9, 9] 
.slice(0,2) to get the first two digits => [1, 9]
.join('') to combine two digits => 19 

Now that we have the two digits, ensure it is a number; put it in variable. 
let twoDigits = year.split('').slice(0,2).join('') // 19

If the number ends in 1, the suffix is –st.
If the number ends in 2, the suffix is –nd.
If the number ends in 3, the suffix is –rd.
If the number ends in 4-9, the suffix is –th.
If the number is a multiple of 10, the suffix is –th.
The numbers 11-19 also use the suffix –th.

Return:
String, num is +1 from first two digits of string + th,st,rd, 


*/

function whatCentury(year){
//use the math obj to divide the century and round up with ceil
let century = Math.ceil(year/100) // this is a number data type that will return two digits
console.log(century)
//add conditionals to add the correct suffix, need to target the second digit (index 1)
    //check for special conditions, 11th to 19th century
if (century >= 11 && century <= 19) {
    return century + 'th'
}
//now create a variable that will target the last digit and add the correct suffix
let lastDigit = century % 10

if (lastDigit === 1) {
    return century + 'st'
} else if (lastDigit === 2) {
    return century + 'nd'
} else if (lastDigit === 3) {
    return century + 'rd'
} else {
    return century + 'th'
}
}

console.log(whatCentury(2918))







// MY FIRST SOLUTION
// function whatCentury(year){
//     let twoDigitsArr = year.split('').splice(0,2)
//     // let strToNum = Number(twoDigits)+1
//     //Now we need to add conditional statements to concat the correct ending
//     console.log(twoDigitsArr[1]) // returns 1st index which is 3
//     //loop through and incr of 1 to 1st index
//     for (let i = 0; i <= twoDigitsArr; i++) {
//         return Number(twoDigitsArr[1]+= 1)
//     }
//     console.log(typeof(Number(twoDigitsArr[1] += 1)))
// }

// whatCentury('2399')

//MY SECOND SOLUTION
// function whatCentury(year){
//     //use the math obj to divide the century and round up with ceil
//     let century = Math.ceil(year/100) // this is a number data type
//     console.log(century)
//     //add conditionals to add the correct suffix, need to target the second digit (index 1)
//     if ( century[1] === 1) {
//         return century.concat['st'].join('')
//     } else if (century[1] === 2) {
//         return century.concat['nd'].join('')
//     } else if (century[1] === 3) {
//         return century.concat['rd'].join('')
//     } else if (century[1] >= 4 || century[1] <= 9 || century[i] >= 11 || century[i] <= 19) {
//         return century.concat['th'].join('')
//     }
//     }
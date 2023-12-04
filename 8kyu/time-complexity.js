/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

P
data type: number, >= 0 
conditional statement dadYearsOld = sonYearsOld * 2
R
How many years father was 2x older than son (number);
E
Son 16 Dad 32, 16 years ago?
P
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    //return number using absolute math obj
    return Math.abs(dadYearsOld - (sonYearsOld*2))
}
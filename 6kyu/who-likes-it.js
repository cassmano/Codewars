/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Input: array with names of people
Output: Name of people converted to string with concat "like(s) this"

Conditions:
    -if arr=0: no one likes this (plural)
    -if 2 people: name AND name like this (singular)
    -if 3 people: name, name AND name like this (singular, comma after first name)
    -if 4+ people: name, name and (number of people) like this (singular, comma after first name)
        -how to add remaining in array, with reduce? or let return numOfPeople = array.length - 2 

*/

function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        const remainingLikers = names.length - 2;
        return `${names[0]}, ${names[1]} and ${remainingLikers} others like this`;
    }
}


console.log(likes(['Jeff', 'Luna', 'Boona']))
console.log(likes(['Stefanie']))
console.log(likes(['Tia', 'Sia', 'Mia']))
console.log(likes(['Timmy', 'Tommy', 'Anna', 'Sia', 'Mia']))

/*
Big O notation: O(1) 
constant time... bc it will perform the same num of operations no matter how big the array is
more efficient since there's no nested loops

*/
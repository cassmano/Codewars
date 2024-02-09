// Create an object that has your firstName, lastName, and occupation as keys.
let me = {
    firstName: 'Casandra',
    lastName: 'Mano',
    occupation: 'SWE'
}
console.log(typeof(me))
// Access each value from your object using both dot notation and bracket notation.
console.log(me.firstName)
console.log(me.lastName)
console.log(me.occupation)
console.log(me["firstName"])
console.log(me["lastName"])
console.log(me["occupation"])

// Add a key for hobby to your object. Remove the key and value for occupation.
me.hobby = "cooking"
delete me.occupation
console.log(me)

// What is the difference between dot notation and bracket notation?
// dot notation is best practice/preferrable; however bracket notation must be used in some instances like for numbers; keys must be accessed via brackets and quotes to signify it's a string

// Given the following object below, write code to print the value then the key to the console separated by ‘=>’:
let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim

for (let hobby in namesAndHobbies) {
    console.log(`${namesAndHobbies[hobby]} => ${hobby}`)
}

console.log(namesAndHobbies.cass="cooking")
console.log(namesAndHobbies)

//Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

if ("cass" in namesAndHobbies) {
    console.log("cass", namesAndHobbies.cass)
}

// For each of the exercises below, assume you are starting with the following programming object.

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/",
    coffee: 'yes'
}

// Write the command to add the language “Go” to the end of the languages array.
let array = programming.languages.push("Go")
console.log(programming.languages)
// Change the difficulty to the value of 7.
programming.difficulty= 7
console.log(programming.difficulty)
// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes
// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true
console.log(programming)
// Using a loop, iterate through the languages array and console.log all of the languages.
for (let language in programming.languages) {
    console.log(language)
}
// Using a loop, console.log all of the keys in the programming object.
for (let keys in programming) {
    console.log(keys)
}
// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
    console.log(programming[key])
}
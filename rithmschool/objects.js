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
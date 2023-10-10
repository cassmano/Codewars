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
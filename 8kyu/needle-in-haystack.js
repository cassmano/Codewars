//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:

//P- array with nums ints etc; once needle is found return as string and its index
  //need to loop through array and search for 'needle
//R- return string and index in template literal
// My solution
function findNeedle(haystack) {
    for(let i = 0; i <= haystack.length; i++) {
        if(haystack[i]==='needle'){
            return `found the needle at position ${i}`
        }
    }
}
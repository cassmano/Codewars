// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function findAdjacentProduct(array) {
    //these cannot be sorted since they are looking for adjacent pairings
    //start with the first two adjacent pairings -> create a variable
    let largestProd = array[0] * array[1]
    //take largest product and compare with the next; loops would be best
    for (let i = 1; i < array.length - 1; i++) {
        //create a variable that calculates the next adjacent elements
        let nextAdjProd = array[i] * array[i + 1] 
            if (nextAdjProd > largestProd) {
                largestProd = nextAdjProd
        }
    }
    return largestProd
}

console.log(findAdjacentProduct([-2,5,7,5,2,9,1]))
console.log(findAdjacentProduct([4,6,1,7,3,9,3,4]))
console.log(findAdjacentProduct([3, 6, -2, -5, 7, 3]))
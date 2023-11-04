//You are given two arrays of integers a and b of the same length, and an integer k. 
//We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

//Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

function solution(a,b,k) {
    let tiny = 0
    const revB = b.reverse()
    console.log(revB)
    //loop through a and b simultaneously
    for (let i = 0; i < a.length; i++) {
        //declare concat var
        let concat = Number(a[i].toString() + revB[i].toString())
        if (concat < k ) {
            tiny++
        }
    }
    return tiny
}

let a = [16,1,4,2,14]
let b = [7,11,2,0,15]
let k = 743
console.log(solution(a,b,k))
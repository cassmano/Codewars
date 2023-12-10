function solution(array) {
    //declare a variable for duplicate
        //initiating at zero
    let duplicate = 0
    //sort the array
    let sortedArr = array.sort((a,b) => a-b)
    console.log(sortedArr)
    for (let i = 1; i<sortedArr.length;i++) {
        if (sortedArr[i] === sortedArr[i+1]) {
            duplicate +=1
        } else if (duplicate > 1 ) {
            return false
        }
    }
}

console.log(solution([1,2,3,2,4]))
console.log(solution([1,2,2,3,3,2,4]))
console.log(solution([10,2,,3,2,4]))
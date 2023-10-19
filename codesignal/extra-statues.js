function solution(statues) {
    //sort the array from least to greatest
    let sorted = statues.sort((a,b) => a - b)
    console.log(sorted)
    //create a variable to hold how many statues need to be purchased
    let extraStatues = 0
    // //compare first index and next one with loop
        //if first index + 1 = the next one, move on to the next; else increase get statues by 1
    for (let i = 0; i < statues.length; i++) {
        if (statues[i] + 1 !== statues[i + 1]) {
            extraStatues +=1
        } 
    }
    return extraStatues
}

console.log(solution([6, 2, 3, 8]))
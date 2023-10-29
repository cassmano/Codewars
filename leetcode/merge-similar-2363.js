 // INPUT:
 // items1Arr= [[value, weight], [value,weight], ...]
 // items2Arr= [[value, weight], [value,weight], ...]
    //value is unique; weight the sum of items with matching indexes
    //length of arrays are not always unqiue
 //OUTPUT:
    //Return array where returnedArr = [value, weight]
        // weight = sum of weights of all items with value
        // returned in ascending order, sort?
    //Output array =
    // first index should always be the first index in item 1
    // if first index in item1 matches with first index in item2, get sum of 2 index in the arrays
    // if first index in item1 !== first index in item 2 => output array
    // sorted in ascending order
    //Actual solution
    var mergeSimilarItems = function(items1, items2) {
        //create a map object to store new array items
        let mergedArray = new Map()
        //loop through items1 array and add the first index to map object
        for (let i = 0; i < items1.length; i++) {
            mergedArray.set(items1[i][0], items1[i][1])
        }
        for (let j = 0; j <items2.length; j++) {
            //check if merged Array has the first index that's in subarray
            if (mergedArray.has(items2[j][0])){
                mergedArray.set(items2[j][0], mergedArray.get(items2[j][0]) + items2[j][1])
            } else {
                //if there is no match between first indexes, bring entire subarray down to mergedArray
                mergedArray.set(items2[j][0], items2[j][1])
            }
        }
        //now sort the array in ascending order
        return Array.from(mergedArray.entries).sort((a,b) => a[0] - b[0])
    }

    //My solution that doesn't work
    // var mergeSimilarItems = function(items1, items2) {
    //     //declare a variable for the output array
    //     let mergedArray = []
    //     //loop over items1 and push the first index into the merged array
    //     for (let i = 0; i < items1.length; i++) {
    //         mergedArray.push(items1[i][0])
    //         console.log(mergedArray)
    //     } for (let j = 0; j < items2.length; j++) {
    //             if (items1[i][0] === items2[j][0]) {
    //                 let sum = items1[i][1] + items2[j][1]
    //                 mergedArray[i].push(sum)
    //             }
    //         }
    //     }
    //     return mergedArray
    // }

    console.log(mergeSimilarItems([[1,1,],[4,5],[3,8]], [[3,1],[1,5]]))
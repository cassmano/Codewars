/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Params:
Data type: Nums
ObJ: Array of nums
Do: arr[0] first index, arr[arr.length - 1] to get last index
Big O: constant time, since it's a property look up

Return: lowest and biggest number, make these into a variable
*/

    function minMax(arr){
        //we will return the min in arr, and max in arr
            //use Math obj to get min and max
            //spread operator is used to spread objs in array
        return [Math.min(...arr), Math.max(...arr)]
      }
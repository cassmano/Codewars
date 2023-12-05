/* 
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for all the customers to check out!

input:
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
Args: (Queue, Till)
Queue: [1: time, 2: time, 3: time]
N: number of tills

output:
The function should return an integer, the total time required. Return total time (amongst all customers?)

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1) // return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2) // return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished. --> so, if greatest time > b+c+d... it should return the greatest time // if customers > tills, return highest time 

queueTime([2,3,10], 2) // should return 12

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

Params: (queue, till) -> (arr, n); data type: positive int
Conditional: if n=1, return the sum of array (reduce method)
                else if n=2, return the greatest num spent at til *note* order of queue never changes; loop if arr[i] > arr[i] -> i++ (loop to next one?) return greatest
                else if n > arr.reduce (sum of all array), return # of elements inside arr 

Return: return an int that encompasses the TOTAL time guests can checkout

*/


//ACTUAL SOLUTION

function queueTime(customers, n) {
    if (n === 1) {
        return customers.reduce((a, c) => a + c, 0); // yes i had this
    } else { // did not have anything after this
        let tills = Array(n).fill(0); // Initialize an array to store the time on each till 
        for (let i = 0; i < customers.length; i++) { // iterate through customers and assign them a till
            tills[tills.indexOf(Math.min(...tills))] += customers[i];
        }
        return Math.max(...tills);
    }
}


// //MY SOLUTION
// function queueTime(customers, n) {
//     let sortedArr = customers.sort((a, b) => a - b) // creating a var to use later; when tils are > 2
//     if ( n === 1 ) {
//         return customers.reduce((a,c) => a+c) // this will return the sum of arr mins 
//     } else if ( n === 2 ) {
//         return sortedArr[sortedArr.length -1] // return the greatest number in the array
//     }
// }
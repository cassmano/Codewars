// You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

// [  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]
// As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, then the first part will has a extra character.

// You should only cut the fruit, other things should not be cut, such as the "bomb":

// [  "apple",     "pear",     "banana",   "bomb"]  -->
// ["app", "le", "pe", "ar", "ban", "ana", "bomb"]
// The valid fruit names are preloded for you as:

// fruitsName
// Task
// Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.

/* 
Params: 
Array with fruit & nonfruit elements; 
Console.log(fruitsName) // array of fruits; 
Conditional statement required: if (e === fruitsName ) { do func that will cut them in half } else return (e)
To splice an array in half fruitsName[i].length (?) get the fruit at the index of i from the fruitsName arr; and \ 2; if fruitsName.length % 2 !== 0, +1 to the first half

Return: [apple, banana, bomb] -> ['app', 'le', 'ban', 'ana', 'bomb]
  //how to approach: 
  1. Get the each element and count its length fruits[0].length
    for let i = 0; i < fruits.length; i++ { return fruits[i] }
  2. If it's a fruit / 2 
      return e if it's not a fruit

*/

function cutFruits(fruits) {
  // Result array to store the cut fruits
  const halfFruit = []
  // Iterate through e in fruits arr
  for (let i = 0; i < fruits.length; i++) {
    const currentFruit = fruits[i]
    // Check if the current element is a valid fruit
    if (fruitsName.includes(currentFruit)) {
      const halfLength = Math.ceil(currentFruit.length / 2);
      // Cut the fruit into two parts
      const firstHalf = currentFruit.slice(0, halfLength);
      const secondHalf = currentFruit.slice(halfLength);
      // Add the halves to the result array
      halfFruit.push(firstHalf, secondHalf);
    } else {
      // If it's not a fruit, add it as is to the result array
      halfFruit.push(currentFruit);
    }
  }
  return halfFruit;
}
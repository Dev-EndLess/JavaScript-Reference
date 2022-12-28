//* * * findIndex * * *//

// Definition and Usage
// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

const numbers = [1, 2, 3, 4, 5, 3]

const result = numbers.findIndex(findThree)
const result2 = numbers.findLastIndex(findThree)

function findThree(value) {
  return value === 3
}

console.log(result)
console.log(result2)
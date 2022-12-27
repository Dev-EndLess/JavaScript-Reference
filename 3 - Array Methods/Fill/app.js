//* * * FILL * * *//

// Definition and Usage
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

const numbers = [1, 2, 3, 4, 5]

numbers.fill(0, 1, 4)

console.log(numbers) // return 1, 0, 0, 0, 5

//----------------------------------------------------------------//

function fillArray(num) {
  return Array(num)
  .fill(0)
  .map((_, index) => index + 1)
  // .reverse()
}

console.log(fillArray(10))
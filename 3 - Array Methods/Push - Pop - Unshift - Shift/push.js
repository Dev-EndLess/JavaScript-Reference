//* * * PUSH * * *//
console.log('* * * push * * *')

// Definition and Usage
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

const numbers = [1, 2, 3, 4, 5]

const total = numbers.push(6, 7, 8, 9)
// numbers.push(6)
numbers.push(6, 7, 8, 9)

console.log(numbers)
console.log(total)
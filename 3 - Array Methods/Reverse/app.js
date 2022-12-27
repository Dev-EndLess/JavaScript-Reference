//* * * REVERSE * * *//

// Definition and Usage
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

const numbers = [1, 2, 3, 4, 5]
const numbers02 = [1, 2, 3, 4, 5]

const reverseNumbers = numbers.reverse()

console.log(numbers)
console.log(reverseNumbers)

console.log('* * * * * * * * * *')



//-----------------------------------------------------------//

const reverseNumbers02 = numbers02.concat().reverse()

console.log(numbers02)
console.log(reverseNumbers02)

console.log('* * * * * * * * * *')



//-----------------------------------------------------------//

const reverseNumbers03 = [...numbers02].reverse()

console.log(numbers02)
console.log(reverseNumbers02)

console.log('* * * * * * * * * *')



//-----------------------------------------------------------//

const string = 'Coding is fun'

const result = string
  .split('')
  .reverse()
  .join('')

console.log(result)

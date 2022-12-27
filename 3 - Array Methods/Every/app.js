//* * * EVERY * * *//

// Definition and Usage
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

const numbers = [1, 2, 3, 4, 5]

function isPositive(item, index, array) {
  return item > 0
}

const result = numbers.every(isPositive)

function isPositive02(item, index, array) {
  return item < 0
}

const result02 = numbers.every(isPositive02)


console.log(result) // return true
console.log(result02) // return false



//------------------------------------------------------------------------------------//

const people = [
  {
    name: 'Endless'
  },
  {
    name: 'Lyna'
  },
  {
    name: 'Florin'
  },
  {
    surname: 'Liam'
  },
  {
    name: 'Ivan'
  }
]

const nameResult = people.every(person => person.name !== undefined )

console.log(nameResult) // return false



//--------------------------------------------------------------------------------------//

const ArrayNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const arrayResult = ArrayNumbers.every(arr => Array.isArray(arr))

console.log(arrayResult) // return true

console.log('* * * * * * * * * *')

const ArrayNumbers02 = [
  [1, 2, 3],
  [4, 5, 6],
  '7, 8, 9'
]

const arrayResult02 = ArrayNumbers02.every(arr => Array.isArray(arr))

console.log(arrayResult02) // return false

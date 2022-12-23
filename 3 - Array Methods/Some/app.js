//* * * SOME * * *//

// Definition and Usage
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

const numbers = [1, 2, 3, 4]

const result = numbers.some(maggioreDiTre)
const result02 = numbers.some(maggioreDiCinque)

function maggioreDiTre(item) {
  return item > 3
}

function maggioreDiCinque(item) {
  return item > 5
}

console.log(result) // return true
console.log(result02) // return false

const people = [
  {
    name: 'endless',
    age: 34
  },
  {
    name: 'Ivan',
    age: 41
  },
  {
    name: 'Paul',
    age: 38
  },
]

const adultTest = people.some(isAdult)
const adultTest02 = people.some(isAdult02)

function isAdult(person) {
  return person.age > 17
}

function isAdult02(person) {
  return person.age < 18
}

console.log(adultTest)
console.log(adultTest02)
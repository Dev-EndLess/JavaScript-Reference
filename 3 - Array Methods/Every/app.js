//* * * CONCAT * * *//

// Definition and Usage
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]

const total = num1.concat(num2, num3)

console.log(total)
console.log(num1)
console.log(num2)
console.log(num3)

total.push(10, 11, 12)

console.log(total)
console.log(num1)

console.log('* * * * * * * * * *')

const result = num1.concat(1, 2, 3)

console.log(result)
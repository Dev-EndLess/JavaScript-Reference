//* * * flat  * * *//

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arrNumbers = [1, 2,[3, 4,[5, 6,[7, 8]]]]

const result = arrNumbers.flat()
const result2 = arrNumbers.flat(2)
const result3 = arrNumbers.flat(3)
const result4 = arrNumbers.flat(Infinity)

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
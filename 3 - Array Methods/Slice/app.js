//* * * SLICE * * *//

// Definition and Usage
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.

const numbers = [1, 2, 3, 4, 5]

const sliceArray = numbers.slice(1, 4) // cut from index 1 to 4
const sliceArray02 = numbers.slice(2) // cut from index 2 
const sliceArray03 = numbers.slice(-3) // cut last 3 item

console.log(sliceArray)
console.log(sliceArray02)
console.log(sliceArray03)
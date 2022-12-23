//* * * SPLICE * * *//

// Definition and Usage
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

const numbers = [1, 2, 3, 4, 5]
const numbers02 = [1, 2, 3, 4, 5]

// first parameter: where start to cut
// second parameter: how many item to cut
const deletedItems = numbers.splice(2, 2)
const deletedItems02 = numbers02.splice(2, 2, 20, 30)


console.log(numbers) // return 1,2,5 ( item remaining )
console.log(deletedItems) // return 3,4 ( deleted items )

console.clear()

console.log(numbers02) // return numbers added
console.log(deletedItems02) // return 3,4 ( deleted items )




//* * * from * * *//

// Definition and Usage
// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.

const string = '123456'

const array = Array.from(string)
const array2 = Array.from(string, Number)

console.log(array) // return ['1','2','3','4','5','6']
console.log(array2) // return [1, 2, 3, 4, 5, 6]

console.log('* * * * * * * * * *')



const numbers = [1,2,3,4,2,3,4,2,3,2,3,1,2,3,2,1,4,4,2,1,1,3,2]

const numResult = new Set(numbers)
const numResult2 = Array.from(new Set(numbers))

console.log(numResult)
console.log(numResult2)

console.log('* * * * * * * * * *')



const friends = ['endless', 'ivan', 'lyna', 'ivan','endless']

const friendsResult = new Set(friends)
const friendsResult2 = Array.from(new Set(friends))

console.log(friendsResult)
console.log(friendsResult2)
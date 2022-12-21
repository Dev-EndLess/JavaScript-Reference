/* * * Spread Operator || Rest Operator * * */

// SPREAD: Add the elements of an existing array into a new array

let certificationToAdd = ['Algoritms and Data Structures', 'Front End Libraries']
let certifications = ['Responsive Web Design', ...certificationToAdd, 'Data Visualization',
'APIs and Microservices', 'Quality Assurance and Information Security']

console.log(certifications)
console.log('* * * * * * * * * *')

// Pass elements of an array as arguments to a function
let args = [1, 2, 3, 4 ]

function addThreeNumbers(x, y, z, s) {
  console.log(x+y+z+s)
}

addThreeNumbers(...args)
console.log('* * * * * * * * * *')


// Copy arrays
let arr1 = [1, 2, 3]
let arr2 = [...arr1]
arr2.push(4)
console.log(arr2)
console.log('* * * * * * * * * *')


// Concatenate arrays
let arr01 = [0, 1, 2]
let arr02 = [3, 4, 5]
let arr03 = []
arr03 = [...arr01, 'freeCodeCamp', ...arr02]

console.log(arr03)
console.log('* * * * * * * * * *')


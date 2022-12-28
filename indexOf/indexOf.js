//* * * indexOf * * *//

// Definition and Usage
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right.
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

const names = ['endless', 'ivan', 'lyna']

console.log(names.indexOf('endless'))
console.log(names.indexOf('ivan'))
console.log(names.indexOf('lyna'))

const index = names.indexOf('ivan')

names[index] = 'Doko'

console.log(names)


if (index > -1) {
  console.log('Yeah, we have Doko')
} else {
  console.log('we are sad...')
}


console.log('* * * * * * * * * *')


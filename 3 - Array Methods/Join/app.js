//* * * JOIN * * *//

// Definition and Usage
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

const nation = ['Italy', 'France', 'Spain', 'Germany']

// const result = nation.join(' - ')
// const result = nation.join(', ')
// const result = nation.join('')
const result = nation.join(' / ')

console.log(result)
console.log(`I want Visit ${result}`)
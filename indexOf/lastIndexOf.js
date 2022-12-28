//* * * lastIndexOf * * *//

// Definition and Usage
// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() starts at a specified index and searches from right to left.
// By defalt the search starts at the last element and ends at the first.
// Negative start values counts from the last element (but still searches from right to left).

const arrayNames = ['endless', 'paul', 'umbo', 'miriam']

const index = arrayNames.lastIndexOf('paul')

console.log(index) // return 2
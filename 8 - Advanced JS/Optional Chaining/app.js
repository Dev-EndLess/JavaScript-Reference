// OPTIONAL CHAINING //

const person = {
  name: 'John',
  age: '32',
  car: {
    color: 'black',
    year: 2002,
    warranty: {
      option1: 3,
      option2: 5,
      option3: 10
    },
    drive() {
      return 'My car is Very COOL'
    }
  }
}


const carColorInfo = person.car?.color
console.log(carColorInfo)

const carWarrantyInfo = person.car?.warranty?.option3
console.log(carWarrantyInfo)

// Its possible call functions
console.log(person.car?.drive?.())

// If return undefined return a custom propriety ( 180km )
const carSpeedInfo = person.car?.speed ?? '180km'
console.log(carSpeedInfo)
const array = [
  { name: 'Sara Connor', age: 42, gender: 'Female', points: 7, email: 'SaraConnor@gmail.com' },
  { name: 'John Connor', age: 14, gender: 'Male', points: 4, email: 'JohnConnor@gmail.com' },
  { name: 'Ada Wong', age: 32, gender: 'Female', points: 11, email: 'AdaWong@gmail.com' },
  { name: 'Albert Wesker', age: 37, gender: 'Male', points: 22, email: 'AlbertWesker@gmail.com' },
  { name: 'Jill Valentine', age: 24, gender: 'Female', points: 15, email: 'JillValentine@gmail.com' },
  { name: 'Leon Kennedy', age: 27, gender: 'Male', points: 18, email: 'LeonKennedy@hotmail.com' },
]

// trovo l'oggetto Ada cercando i suoi punti
const adaPoints = array.find(item => item.points === 11)
console.log(adaPoints)


// trovo l'oggetto Jill cercando la sua eta
const jillAge = array.find(item => 
  item.age === 24)
console.log(jillAge)


// trovo l'oggetto Leon cercando la sua email
const leonMail = array.find(item => 
  item.email === 'LeonKennedy@hotmail.com')
console.log(leonMail)
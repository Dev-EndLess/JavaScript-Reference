const array = [
  { name: 'Sara Connor', age: 42, gender: 'Female', points: 7, email: 'SaraConnor@gmail.com' },
  { name: 'John Connor', age: 14, gender: 'Male', points: 4, email: 'JohnConnor@gmail.com' },
  { name: 'Ada Wong', age: 32, gender: 'Female', points: 11, email: 'AdaWong@gmail.com' },
  { name: 'Albert Wesker', age: 37, gender: 'Male', points: 22, email: 'AlbertWesker@gmail.com' },
  { name: 'Jill Valentine', age: 24, gender: 'Female', points: 15, email: 'JillValentine@gmail.com' },
  { name: 'Leon Kennedy', age: 27, gender: 'Male', points: 18, email: 'LeonKennedy@hotmail.com' },
]


array.forEach(num => console.log(num.points * 2));
array.forEach(num => console.log('I Personaggi Selezionabili sono ' + num.name ));
array.forEach(num => console.log('Puoi contattarli all indirizzo ' + num.email ));

console.log('* * * * * * * * * *')

const numbers = [65, 44, 12, 4];

let numPlusTen = []

numbers.forEach(num => {
  numPlusTen.push(num + 10)
})

console.log(numPlusTen)
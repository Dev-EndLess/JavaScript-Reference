const array = [
  { name: 'Sara Connor', age: 42, gender: 'Female', points: 7, email: 'SaraConnor@gmail.com' },
  { name: 'John Connor', age: 14, gender: 'Male', points: 4, email: 'JohnConnor@gmail.com' },
  { name: 'Ada Wong', age: 32, gender: 'Female', points: 11, email: 'AdaWong@gmail.com' },
  { name: 'Albert Wesker', age: 37, gender: 'Male', points: 22, email: 'AlbertWesker@gmail.com' },
  { name: 'Jill Valentine', age: 24, gender: 'Female', points: 15, email: 'JillValentine@gmail.com' },
  { name: 'Leon Kennedy', age: 27, gender: 'Male', points: 18, email: 'LeonKennedy@gmail.com' },
]

// filtraggio eta da 25anni in su
const filterAge = array.filter(item => item.age >= 25)
console.log(filterAge)

// filtraggio per genere Female o Male
const filterGen = array.filter(item => 
  item.gender === 'Female')
console.log(filterGen)

// filtraggio dei punti da 16 in su
const filterPoints = array.filter(item => 
  item.points >= 16)
console.log(filterPoints)

// filtraggio per un nome specifico
const filterName = array.filter(item => 
  item.name == 'John Connor')
console.log(filterName)

// filtraggio degli anni da compresi tra 30 e 40
const filterAgeRange = array.filter(item => 
  item.age >= 30 && 
  item.age <= 40)
console.log(filterAgeRange)

// filtraggio dei punti tra 5 e 15
const filterPointsRange = array.filter(item => 
  item.points >= 5 && 
  item.points <= 15)
console.log(filterPointsRange)

// filtraggio con le iniziale del nome usando il method startWith()
const filterStart = array.filter(item => 
  item.name.startsWith('A'))
console.log(filterStart)

// filtraggio con le iniziale del nome usando il method match()
const filterMatch = array.filter(item => 
  item.name.match('J'))
console.log(filterMatch)

const jill = array.find(item => 
  item.name == 'Jill Valentine')
console.log(jill)

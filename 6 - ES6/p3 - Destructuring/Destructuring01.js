// Destructuring Assignment to Extract Values from Objects //

const temperature = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today } = temperature
const { tomorrow } = temperature

console.log(today)
console.log(tomorrow)
space()


// Estraggo da un Oggetto i valori delle proprieta ieri/oggi/domani //

const tempo01 = {
  ieri: 'Pioggia',
  oggi: 'Nuvoloso',
  domani: 'Grandine'
}

const { ieri } = tempo01
const { oggi } = tempo01
const { domani } = tempo01

console.log(ieri)
console.log(oggi)
console.log(domani)
space()


// Destructuring Assignment to Assign Variables from Objects //

const temperature02 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday } = temperature02
const { tomorrow: highTomorrow } = temperature02

console.log(highToday);
console.log(highTomorrow);
space()


// Asssegno una varibiale a una proprieta //

const tempo02 = {
  ieri: 'Pioggia',
  oggi: 'Nuvoloso',
  domani: 'Grandine'
};

const { ieri: new1 } = tempo02
const { oggi: new2} = tempo02
const { domani: new3 } = tempo02

console.log(new1)
console.log(new2)
console.log(new3)
space()








// Destructuring Assignment to Assign Variables from Nested Objects //

const previsioni = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday1 } } = previsioni

console.log(lowToday)
console.log(highToday1)
space()


// Assegno una variabile a una proprieta di un oggetto innidato dentro un altro oggetto //

const tempo04 = {
  ieri: { Pioggia: 'Pioggia Molto Forte'},
  oggi: { Nuvoloso: 'Tempo Molto Nuvoloso'},
  domani: { Grandine: 'Grandine Poco Distruttiva'}
}

const { ieri: { Pioggia: forte } } = tempo04
const { oggi: { Nuvoloso: molto } } = tempo04
const { domani: { Grandine: poco } } = tempo04

console.log(forte)
console.log(molto)
console.log(poco)





function space() {
  console.log(' ')
}

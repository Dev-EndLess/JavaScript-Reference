//* * * SORT * * *//

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const ages02 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Ordiniamo la data di nascita delle varie compagnie
// dalla piu vecchia alla piu nuova e viceversa

// const ordina = companies.sort ((a, b) => (a.start > b.start ? -1 : 1))       
const ordinaInizio = companies.sort ((a, b) => (a.start > b.start ? 1 : -1)) // 1981 to 2011     
console.log(ordinaInizio)

// const ordinaFine = companies.sort((a, b) => (a.end > b.end ? 1 : -1))
const ordinaFine = companies.sort((a, b) => (a.end > b.end ? -1 : 1)) // 2016 to 1989
console.log(ordinaFine)

// Muta l'array gia esistente

const num = ages.sort((a, b) => a - b)  
const num02 = ages02.sort((a, b) => (b - a)) 

console.log(num) // 3 12 etc..etc.. 61 64
console.log(num02) // 64 61 etc..etc..  12 5 
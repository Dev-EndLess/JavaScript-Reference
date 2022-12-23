// forEach // filter // map // sort // reduce

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
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// filter //     

// Prendo i numeri da 18 in su dentro Array di ages 


// let canDrink = []
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 18) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink)


// const canDrink = ages.filter(function(age){             // ES 5
//   if(age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink)

// Prendo i numeri da 21 in su dentro Array di ages 

const canDrink = ages.filter(age => age >= 21);          // ES 6
console.log(canDrink)

// Prendo solo le categorie Technology dentro Array companies

const retailComapanies = companies.filter(company => company.category === 'Technology')
console.log(retailComapanies)

// Prendo solo le compagnie create negli anni 90

const compagnie90 = companies.filter(companies => (companies.start >= 1990 && companies.start <= 2000));

console.log(compagnie90)

// Prendimo le compagnie che sono rimaste attive almeno per 10 Anni

const attive10 = companies.filter(companies => (companies.end - companies.start >= 10 ));

console.log(attive10)


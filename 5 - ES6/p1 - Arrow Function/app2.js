// Example
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

const materialsLength1 = materials.map(function(material) { 
  return material.length;
});

const materialsLength2 = materials.map((material) => {
  return material.length;
});

const materialsLength3 = materials.map(material => material.length);
const materialsLength4 = materials.map(material => material);
console.log(materialsLength4)

console.log('* * * * * * * * * *')
//--------------------------------------------------------------------------------//


const somma1 = (num1, num2) => num1 + num2
const num3 = somma1(2, 2)
console.log(num3);


const somma2 = () => num3 + 4
const num4 = somma2();
console.log(num4)


const somma3 = () => num4 +8
const num5 = somma3()
console.log(num5)


const sommaFinale = () => num5 + 16
const finalSum = sommaFinale()
console.log(finalSum)


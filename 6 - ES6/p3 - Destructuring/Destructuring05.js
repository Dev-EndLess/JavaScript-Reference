// Destructuring Assignment with the Rest Parameter to Reassign Array Elements //

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(array) {
  const [a, b, c, ...arr] = array;
  return arr;
}
const lista2 = removeFirstTwo(lista1);
console.log(lista2);
console.log(lista1); 

//* * * FOR LOOP * * *//

// for ([initialization]; [condition]; [final-expression]) {}

const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
  console.log(i)
}
console.log(myArray);
console.log('* * * * * * * * * *')

// --------------------------------------------------------------------------------- //

const myArray2 = [];

for (let num = 5; num >= 0; num--) {
  myArray2.push(num);
  console.log(num)
}
console.log(myArray2);
console.log('* * * * * * * * * *')

// --------------------------------------------------------------------------------- //

const myArr4 = [2, 3, 4, 5, 6];

let total = 0
for(let i = 0; i < myArr4.length; i++) {
  total += myArr4[i];
}

console.log(myArr4)
console.log(total)
console.log('* * * * * * * * * *')

// --------------------------------------------------------------------------------- //

const myArr5 = [];

for (let num1 = 0; num1 < 10; num1++) {
  if(num1 === 3) {
    console.log('Number 3 is the magic Number')
    continue;
  }

  if(num1 === 4) {
    console.log('Number 4 is my lucky Number ')
  }

  if(num1 === 5) {
    console.log('Number 5 is the last Number')
    continue;
  }

  console.log('Number ' + num1);
  if(num1 === 7) {
    console.log('Stop the Loop')
    break;
  }
}

console.log('* * * * * * * * * *')
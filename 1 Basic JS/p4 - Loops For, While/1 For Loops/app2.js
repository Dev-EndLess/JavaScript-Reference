//* * * FOR LOOP * * *//

// for ([initialization]; [condition]; [final-expression]) {}

let ourArray = [];
for (let i = 0; i < 5; i++) {
  if (i > 2) break
  ourArray.push(i)
}
console.log(ourArray);
console.log('* * * * * * * * * *')

// --------------------------------------------------------------------------------- //

let arr = [10,9,8,7,6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
console.log('* * * * * * * * * *')

// --------------------------------------------------------------------------------- //

let myArr = [
 [1,2], [3,4], [5,6]
];
for (let i=0; i < myArr.length; i++) {
 for (let j=0; j < myArr[i].length; j++) {
   console.log(myArr[i][j])
 }
}
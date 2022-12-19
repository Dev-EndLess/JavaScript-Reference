/* * * FOR LOOPS * * */

// for ([initialization]; [condition]; [final-expression]) {}

let myArray = []

for (var i = 0; i < 5; i++) {
  myArray.push(i) // 0 1 2 3 4 5
}
console.log(myArray)



let ourArray = []

for (var i = 0; i < 5; i++) {
  if (i > 2) break // stop the loop
  ourArray.push(i) // 0 1 2
}
console.log(ourArray)


//----------------------------------------------------//

let arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]) // 10 9 8 7 6
}

console.log('* * * * * * * * * *')


//-----------------------------------------------------//

let arr2 = [
 [1,2], [3,4], [5,6]
]
for (var i=0; i < arr2.length; i++) {
 for (var j=0; j < arr2[i].length; j++) {
   console.log(arr2[i][j]) // 1 2 3 4 5 6
 }
}
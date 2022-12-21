//* * * FOR... IN  * * *//

// for (variable in object) {
//   statements
// }

let person = {firstName:"Fabri ", nickName:"EndLessPain", number:9999}; 

let text = ""
for (let x in person) {
  text += person[x]
  console.log(x)
};
console.log(text) // Fabri EndLessPain9999
console.log('* * * * * * * * * *')

//* * * FOR... OUT * * *//

// for (variable of object) {
//   statement
// }


let arr = [3, 5, 7]
arr.foo = 'hello'

for (let i in arr) {
  console.log(i) // 0 1 2 ( index of array)
};

for (let i of arr) {
  console.log(i) // 3 5 7 (return propriety)
};

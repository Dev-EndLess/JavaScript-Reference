//* * * Regular Expression ( Regex ) * * *//

let re;
re = /hello/;
re = /hello/i; // i =  case insensitive (uppercase and lowercase are not tracked)
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);


// exec() - Return result in an array or null

const result1 = re.exec('hello world');
const result2 = re.exec('endless hello world');
const result3 = re.exec('hi world');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);
console.log('* * * * * * * * * *')


// test() - Returns true or false

const result = re.test('Hello');
console.log(result);
console.log('* * * * * * * * * *')

// match() - Return result array or null

const str = 'Hello There';
const str2 = 'Hi There';
const res1 = str.match(re);
const res2 = str2.match(re);
console.log(res1);
console.log(res2);
console.log('* * * * * * * * * *')


// search() - Returns index of the first match if not found retuns -1

const string = 'Endless Hello There';
const string2 = 'Hello There';
const resultA = string.search(re);
const resultB = string2.search(re);
console.log(resultA);
console.log(resultB);
console.log('* * * * * * * * * *')

// replace() - Return new string with some or all matches of a pattern

const string3 = 'Hello There';
const newStr = string3.replace(re, 'Ehi');
console.log(newStr);
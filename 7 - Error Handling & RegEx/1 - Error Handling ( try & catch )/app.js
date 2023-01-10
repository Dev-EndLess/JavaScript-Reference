//* * * try / catch / finally * * *//

// ReferenceError

try {
  myFunction()
} catch(err) {
  console.log(err)
  // console.log(err.message)
  // console.log(err.name)
  // console.log(err instanceof TypeError)
  // console.log(err instanceof ReferenceError)
} finally {
  console.log('Finally runs')
}

// wihtout try and catch you get a error and the script stop
console.log('Program continues...')
console.log('* * * * * * * * * *')



// Type Error

try {
  null.ourFunction()
  undefined.ourFunction()
} catch (err) {
  console.log(err)
}



console.log('* * * * * * * * * *')

// SyntexError

try {
  console.log(eval('2+2'))
  eval('Hello Guys')
} catch (err) {
  console.log(err)
}



console.log('* * * * * * * * * *')

// URI Error

try {
  decodeURIComponent('%')
} catch (err) {
  console.log(err)
}



// Custom Error

const user = { email: 'jdoe@gmail.com' }

try {
  if (!user.name)
  // throw 'User has no name'
  throw new SyntaxError('User has no name')

} catch(err) {
  console.log(err)
}
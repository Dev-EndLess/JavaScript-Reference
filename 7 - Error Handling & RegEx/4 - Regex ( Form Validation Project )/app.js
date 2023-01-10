let re
// Literal Characters
re = /hello/
re = /hello/i

// Character set & Quantifiers



// String to match
const str = 'Hello World'

// Log Results
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
  if ( re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT matches ${re.source}`)
  }
}

reTest(re, str)
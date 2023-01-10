let re
// Literal Characters
re = /hello/
re = /hello/i

// Metacharacter Symbols

re = /^h/i          // Must start with
re = /d$/i          // Must ends with
re = /^hello$/      // Must begin and end with
re = /^h.llo$/      // Matches any ONE character
re = /^h*llo$/      // Matches any character 0 or more times
re = /gre?a?y/i     // Optional character
re = /gre?a?y\?/i   // Escape character

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
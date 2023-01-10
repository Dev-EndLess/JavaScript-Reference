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


// Brackets [] - Character Sets
re = /gr[ae]y/i     // Must be an a or e
re = /[GF]ray/i     // Must be a G or F
re = /^[GF]ray/i    // Must begin a G or F
re = /[^GF]ray/i    // Must anything except a G or F
re = /[^A-Z]ray/    // Match any uppercase letter
re = /[^a-z]ray/    // Match any lowercase letter
re = /[^A-Za-z]ray/ // Match any letter
re = /[0-9]ray/     // Match any digit


// Braces {} - Quantifiers

re = /hel{2}o/i     // Must occur exacly {m} amount of times
re = /hel{2,4}o/i   // Must occur exactly {m} amount of times
re = /hel{2,}o/i    // Must occur at least {m} times


// Parentheses () - Grouping
re = /^([0-9]x){3}$/


// Shorthand Character Classes
re = /\w/           // Word character - alphanumeric or _
re = /\w+/          // + = one or more
re = /\W/           // Non-Word character
re = /\d/           // Match any digit
re = /\d+/          // Match any digit 0 or more times
re = /\D/           // Match any non-digit 
re = /\s/           // Match whitespace char
re = /\S/           // Match non-whitespace char
re = /Hell\b/i      // word boundary


// Assertions
re = /x(?=y)/       // Match x only if followed by y
re = /x(?!y)/       // Match x only if NOT followed by y


console.log('* * * * * * * * * *')

// String to match
const str = 'Hello World'
// const str = '3x3x3'

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
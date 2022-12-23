//* * * Higher Order Functions * * *//

// A Higher Order Function is a function that does at least one of the follwing:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a functions as the result

import { posts } from './posts.js'

posts.forEach(post => console.log(post))
posts.forEach(post => console.log(post.title))

console.clear()


//---------------------------------------------------------------------//

const filteredPosts = posts.filter(post => post.userId === 3) 
const filteredPostsTwo = posts.filter(post => {
  return post.id === 5}) 

console.log(filteredPosts) // return all userId with value 1
console.log(filteredPostsTwo) // return post id with number 5

console.clear()


//---------------------------------------------------------------------//


const mappedPosts = filteredPostsTwo.map(post => post.id * 5)
const mappedPostsTwo = posts.map(post => {
  return post.title.toUpperCase()})

console.log(mappedPosts) // return 25     ( 5*5 )
console.log(mappedPostsTwo) // return all title in uppercase

// console.clear()


//---------------------------------------------------------------------//

const ids = posts.map(post => {
  return post.id})
const reducedPostValue = ids.reduce((sum, post) => {
  return sum + post
})

console.log(ids)
console.log(reducedPostValue)
//* * * Reduce * * *//

const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce((acc, item) => {
  return acc + item
})

console.log(total)



//---------------------------------------------------------------//

const store = [
  {
    product: 'laptop',
    value: 100,
    count: 5,
  },
  {
    product: 'desktop',
    value: 150,
    count: 10,
  },
  {
    product: 'mobile',
    value: 50,
    count: 15,
  },
]

const totalValueStore = store.reduce(
  (acc, item) => acc + item.value * item.count, 0
)

console.log(totalValueStore)
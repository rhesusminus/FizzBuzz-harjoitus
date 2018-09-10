const { isFizz, isBuzz, isFizzBuzz } = require('./checks.js')
const { initializeArray, resultToString } = require('./utils.js')

const length = process.argv[2] || 100

const initializedArray = initializeArray(length)

const result = initializedArray
			     .map(i => isFizzBuzz(i) ? 'FizzBuzz' : i)
			     .map(i => isFizz(i) ? 'Fizz' : i)
			     .map(i => isBuzz(i) ? 'Buzz' : i)

console.log(resultToString(result))

const R = require('ramda')
const { isFizz, isBuzz, isFizzBuzz, contains } = require('./checks.js')
const { initializeArray, resultToString, numberToArray } = require('./utils.js')

const length = process.argv[2] || 100

const initializedArray = initializeArray(length)

const fizzBuzz = R.compose(
	resultToString,
	R.map(i => isBuzz(i) ? 'Buzz' : i),
	R.map(i => isFizz(i) ? 'Fizz' : i),
	R.map(i => isFizzBuzz(i) ? 'FizzBuzz' : i)
)

const result = fizzBuzz(initializedArray)

console.log(result)

module.exports = {
	fizzBuzz
}

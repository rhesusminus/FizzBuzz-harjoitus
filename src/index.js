const { compose, map } = require('ramda')
const { isFizz, isBuzz, isFizzBuzz } = require('./checks.js')
const { initializeArray, resultToString } = require('./utils.js')

const length = process.argv[2] || 100

const initializedArray = initializeArray(length)

const fizzBuzz = compose(
	resultToString,
	map(i => isBuzz(i) ? 'Buzz' : i),
	map(i => isFizz(i) ? 'Fizz' : i),
	map(i => isFizzBuzz(i) ? 'FizzBuzz' : i)
)

const result = fizzBuzz(initializedArray)

console.log(result)

module.exports = {
	fizzBuzz
}

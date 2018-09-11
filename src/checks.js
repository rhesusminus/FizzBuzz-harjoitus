const R = require('ramda')
const { numberToArray } = require('./utils.js')

// doesContain :: Number -> [] -> Bool
const contains = i => a =>
	R.contains(i, a)

const containsNumber3 = contains(3)
const containsNumber5 = contains(5)

// multipleOf :: Number -> Number -> Bool
const multipleOf = m => i =>
	i % m === 0

const multipleOf3 = multipleOf(3)
const multipleOf5 = multipleOf(5)

const isFizz = i => 
	multipleOf3(i) || containsNumber3(numberToArray(i))

// isBuzz :: Number -> Bool
const isBuzz = i =>
	multipleOf5(i) || containsNumber5(numberToArray(i))

// isFizzBuzz :: Number -> Bool
const isFizzBuzz = i =>
	multipleOf3(i) && multipleOf5(i)

module.exports = {
	isFizz,
	isBuzz,
	isFizzBuzz,
	contains,
	multipleOf
}

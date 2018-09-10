const expect = require('chai').expect
const { equals } = require('ramda')
const { initializeArray, resultToString } = require('../src/utils.js')

describe('Utils', () => {
	describe('initializeArray()', () => {
		it('should initialize array with given length [1...n]', () => {
			const expected = [1, 2, 3, 4, 5]
			const result = equals(initializeArray(5), expected)

			expect(result).to.equal(true)
		})
	})

	describe('resultToString()', () => {
		it('should create string from array', () => {
			const expected = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
			const result = resultToString([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])

			expect(result).to.equal(expected)
		})
	})
})

const expect = require('chai').expect
const { initializeArray, resultToString, numberToArray } = require('../src/utils.js')

describe('Utils', () => {
	describe('initializeArray()', () => {
		it('should initialize array with given length [1...n]', () => {
			const expected = [1, 2, 3, 4, 5]
			const result = initializeArray(5)

			expect(result).to.deep.equal(expected)
		})
	})

	describe('resultToString()', () => {
		it('should create string from array', () => {
			const expected = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
			const result = resultToString([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])

			expect(result).to.equal(expected)
		})
	})

	describe('numberToArray()', () => {
		it('should return give number in a array', () => {
			const expected = [1, 2, 3]
			const result = numberToArray(123)

			expect(result).to.deep.equal(expected)
		})
	})
})

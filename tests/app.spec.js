const expect = require('chai').expect
const { fizzBuzz } = require('../src/index.js')

describe('Application', () => {
	it('should be able to run FizzBuzz', () => {
		const expected = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz'
		const result = fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

		expect(result).to.equal(expected)
	})
})

const expect = require('chai').expect
const { equals } = require('ramda')
const { fizzBuzz } = require('../src/index.js')

describe('Application', () => {
	it('should be able to run FizzBuzz', () => {
		const expected = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
		const result = equals(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), expected)

		expect(result).to.equal(true)
	})
})

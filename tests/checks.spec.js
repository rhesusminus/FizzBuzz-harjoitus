const expect = require('chai').expect
const { isFizz, isBuzz, isFizzBuzz, multipleOf, contains } = require('../src/checks.js')
const { numberToArray } = require('../src/utils.js')

describe('Checks', () => {
	describe('isFizz()', () => {
		const containsNumber3 = contains(3)

		it('should check if 3 is divisible by 3', () => {
			const expected = true
			const result = isFizz(3)

			expect(result).to.equal(expected)
		})

		it('should check if 5 is NOT divisible by 3', () => {
			const expected = false
			const result = isFizz(5)

			expect(result).to.equal(expected)
		})

		it('should check if number 123 contains 3 in it', () => {
			const expected = true
			const result = containsNumber3(numberToArray(123))

			expect(result).to.equal(result)
		})

		it('should check if number 124 does not contain number 3 in it', () => {
			const expected = false
			const result = containsNumber3(numberToArray(124))

			expect(result).to.equal(expected)
		})
	})

	describe('isBuzz()', () => {
		const containsNumber5 = contains(5)

		it('should check if 5 is divisible by 5', () => {
			const expected = true
			const result = isBuzz(5)

			expect(result).to.equal(expected)
		})

		it('should check if 8 is NOT divisible by 5', () => {
			const expected = false
			const result = isBuzz(8)

			expect(result).to.equal(expected)
		})

		it('should check if number "125" has number "5" in it', () => {
			const expected = true
			const result = containsNumber5(numberToArray(125))

			expect(result).to.equal(expected)
		})

		it('should check that number "123" does not have number "5" in it', () => {
			const expected = false
			const result = containsNumber5(numberToArray(123))

			expect(result).to.equal(expected)
		})
	})

	describe('multipleOf()', () => {
		it('should check it given number is multiple of 5', () => {
			const expected = true
			const multipleOf5 = multipleOf(5)
			const result = multipleOf5(15)

			expect(result).to.equal(expected)
		})

		it('should check that 9 is multiple of 3', () => {
			const expected = true
			const multipleOf3 = multipleOf(3)
			const result = multipleOf3(9)

			expect(result).to.equal(expected)
		})

		it('should check that 12 is NOT multiple of 5', () => {
			const expected = false
			const multipleOf5 = multipleOf(5)
			const result = multipleOf5(12)

			expect(result).to.equal(expected)
		})
	})
})

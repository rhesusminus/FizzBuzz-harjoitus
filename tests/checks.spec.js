const expect = require('chai').expect
const {isFizz, isBuzz, isFizzBuzz} = require('../src/checks.js')

describe('Checks', () => {
	describe('isFizz()', () => {
		it('should check if number is divisible by 3', () => {
			const x = 3

			expect(isFizz(x)).to.equal(true)
		})

		it('should check if number is NOT divisible by 3', () => {
			const x = 5

			expect(isFizz(x)).to.equal(false)
		})
	})

	describe('isBuzz()', () => {
		it('should check if number is divisible by 5', () => {
			const x = 5

			expect(isBuzz(x)).to.equal(true)
		})

		it('should check if number is NOT divisible by 5', () => {
			const x = 8

			expect(isBuzz(x)).to.equal(false)
		})
	})
})

const isFizz = i =>
	i % 3 === 0

const isBuzz = i =>
	i % 5 === 0
	
const isFizzBuzz = i =>
	isFizz(i) && isBuzz(i)

module.exports = {
	isFizz,
	isBuzz,
	isFizzBuzz
}

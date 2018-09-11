// isFizz :: Number -> Bool
const isFizz = i =>
	i % 3 === 0

// isBuzz :: Number -> Bool
const isBuzz = i =>
	i % 5 === 0

// isFizzBuzz :: Number -> Bool
const isFizzBuzz = i =>
	isFizz(i) && isBuzz(i)

module.exports = {
	isFizz,
	isBuzz,
	isFizzBuzz
}

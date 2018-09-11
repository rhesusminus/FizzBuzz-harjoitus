// initializeArray :: Number -> [Number]
const initializeArray = l => Object.keys(new Array(l).fill(null)).map(key => parseInt(key, 10) + 1)

// resultToString :: [] -> String
const resultToString = res => res.reduce((pre, next) => `${pre} ${next}`)

// numberToArray :: Number -> [Number]
const numberToArray = num => num.toString(10).split('').map(s => parseInt(s, 10))

module.exports = {
	initializeArray,
	resultToString,
	numberToArray
}
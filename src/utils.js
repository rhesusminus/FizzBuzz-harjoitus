const { concat } = require('ramda')

// initializeArray :: Number -> [Number]
const initializeArray = l => Object.keys(new Array(l).fill(null)).map(key => parseInt(key, 10) + 1)

// resultToString :: [] -> String
const resultToString = res => res.reduce((pre, next) => `${pre} ${next}`)

module.exports = {
	initializeArray,
	resultToString
}
const { concat, toString } = require('ramda')

const initializeArray = l => Object.keys(new Array(l).fill(null)).map(key => parseInt(key, 10) + 1)
const resultToString = res => res.reduce((pre, next) => `${pre} ${next}`)

module.exports = {
	initializeArray,
	resultToString
}
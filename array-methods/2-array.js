var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
words.reduce((longestStr, otherStr) => (longestStr.length >= otherStr.length) ? longestStr : otherStr)


// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sum(numbers) {
	return numbers.reduce(function(a, b) {
    return a + b;
	}, 0);
}
console.log(sum(numbers1));


//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function average(numbers) {
	return numbers.reduce(function(a, b) {
		return a + b;
	}, 0) / numbers.length;
}
console.log(average(numbers2));


//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function avgWL(words) {
		return words.reduce(function(final, current) {
			return final + current.length;
		}, 0) / words.length
}
console.log(avgWL(words2));
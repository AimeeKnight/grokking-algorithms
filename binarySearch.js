/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

// O(log n) log time
var binarySearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while(min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
      return guess;
    }
    else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = binarySearch(primes, 73);

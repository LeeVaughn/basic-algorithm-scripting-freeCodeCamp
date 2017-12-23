// freeCodeCamp Basic Algorithm Scripting Challenge #6 //
// https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays //

// Return Largest Numbers in Arrays //
// Return an array consisting of the largest number from each provided sub-array //
function largestOfFour(arr) {
    // You can do this!
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Solution //
function largestOfFour(arr) {
  var largestZero = [];
  var largestOne = [];
  var largestTwo = [];
  var largestThree = [];
  var largestCombined = [];

  largestZero = arr[0].sort(function (a, b) {
    return a - b;
  });
  largestOne = arr[1].sort(function (a, b) {
    return a - b;
  });
  largestTwo = arr[2].sort(function (a, b) {
    return a - b;
  });
  largestThree = arr[3].sort(function (a, b) {
    return a - b;
  });

  largestCombined.push(largestZero[3], largestOne[3], largestTwo[3], largestThree[3]);
  
  return largestCombined;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
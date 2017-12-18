// freeCodeCamp Basic Algorithm Scripting Challenge #1 //
// https://www.freecodecamp.org/challenges/factorialize-a-number //

// Reverse the provided string //
function reverseString(str) {
    return str
}

reverseString("hello");

// Solution //
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");
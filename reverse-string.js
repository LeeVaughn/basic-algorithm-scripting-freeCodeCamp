// freeCodeCamp Basic Algorithm Scripting Challenge #1 //
// https://www.freecodecamp.org/challenges/reverse-a-string //

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

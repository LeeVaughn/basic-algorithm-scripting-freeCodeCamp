// freeCodeCamp Basic Algorithm Scripting Challenge #7 //
// https://www.freecodecamp.org/challenges/confirm-the-ending //

// Confirm the Ending //
// Check if a string (str) ends with the given target string (target) //
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

// Solution //
function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
        return true;
    } else {
        return false;
    }
}
confirmEnding('Bastian', 'n');
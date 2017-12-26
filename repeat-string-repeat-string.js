// freeCodeCamp Basic Algorithm Scripting Challenge #8 //
// https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string //

// Repeat a string repeat a string //
// Repeat a given string (first arguement) num times (second arguement). //
// Return an empty string if num is not a positive number. //
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

// Solution //
function repeatStringNumTimes(str, num) {
  var strArray = [];

  for (i = 0; i < num; i++) {
    strArray.push(str);
  }
  return strArray.join("");
}

repeatStringNumTimes("abc", 3);
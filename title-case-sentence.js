// freeCodeCamp Basic Algorithm Scripting Challenge #5 //
// https://www.freecodecamp.org/challenges/title-case-a-sentence //

// Title Case a Sentence //
// Return the provided string with the first letter of each word capitalized //
// Make sure the rest of the word is in lower case //
function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");

// Solution //
function titleCase(str) {
    str = str.toLowerCase();
    var strArray = str.split(' ');
    var newArray = [];

    for (var i = 0; i < strArray.length; i++) {
        newArray.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1));
    }
    return newArray.join(' ');
}

titleCase("I'm a little tea pot");
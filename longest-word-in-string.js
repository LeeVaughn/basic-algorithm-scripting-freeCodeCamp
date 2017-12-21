// freeCodeCamp Basic Algorithm Scripting Challenge #4 //
// https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string //

// Find the Longest Word in a String //
// Your response should be a number //
function findLongestWord(str) {
    return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Solution //
function findLongestWord(str) {
    var strArray = str.split(" ");
    var longestWord = strArray.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    return (longestWord.length);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
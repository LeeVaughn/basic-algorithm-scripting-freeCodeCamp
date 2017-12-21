// freeCodeCamp Basic Algorithm Scripting Challenge #2 //
// https://www.freecodecamp.org/challenges/check-for-palindromes //

// Return true if the given string is a palindrome. //
// Otherwise return false. //
function palindrome(str) {
    // Good luck!
    return true;
}

palindrome("eye");

// Solution //
function palindrome(str) {
    str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    var reverseString = str.split("").reverse().join("");

    if (reverseString === str) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
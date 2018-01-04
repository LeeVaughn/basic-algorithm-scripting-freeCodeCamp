// freeCodeCamp Basic Algorithm Scripting Challenge #1 //
// https://www.freecodecamp.org/challenges/caesars-cipher //

// Caesars Cipher //
// Write a function which takes a ROT13 encoded string as input and returns a decoded string. //
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. //
function rot13(str) { // LBH QVQ VG!

    return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// Solution //
function rot13(str) { // YOU DID IT!
    var translation = [];

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            translation.push(str.charAt(i));
        } else if (str.charCodeAt(i) > 77) {
            translation.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
            translation.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
    }
    return translation.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");  

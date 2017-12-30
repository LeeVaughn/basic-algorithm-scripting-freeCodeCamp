// freeCodeCamp Basic Algorithm Scripting Challenge #10 //
// https://www.freecodecamp.org/challenges/chunky-monkey //

// Chunky Monkey //
// Write a function that splits an array (first argument) into groups the length of size (second argument) //
// and returns them as a two-dimensional array. //
function chunkArrayInGroups(arr, size) {
    // Break it up.
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Solution //
function chunkArrayInGroups(arr, size) {
    arrChunk = [];

    for (var i = 0; i < arr.length; i += size) {
        arrChunk.push(arr.slice(i, i + size));
    }
    return arrChunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
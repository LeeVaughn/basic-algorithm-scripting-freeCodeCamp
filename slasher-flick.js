// freeCodeCamp Basic Algorithm Scripting Challenge #11 //
// https://www.freecodecamp.org/challenges/slasher-flick //

// Slasher Flick //
// Return the remaining elements of an array after chopping off n elements from the head. //
// The head means the beginning of the array, or the zeroth index. //
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr;
}

slasher([1, 2, 3], 2);

// Solution //
function slasher(arr, howMany) {
    return arr.slice(howMany);
}

slasher([1, 2, 3], 2);  
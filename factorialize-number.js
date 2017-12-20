// freeCodeCamp Basic Algorithm Scripting Challenge #2 //
// https://www.freecodecamp.org/challenges/factorialize-a-number //

// Return the factorial of the provided integer //
function factorialize(num) {
    return num;
}

factorialize(5);

// Solution //
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num
}

factorialize(0);
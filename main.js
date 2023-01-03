function sum(numbers) {
    return numbers.reduce((a, b) => a + b)
}

function topThree(array) {
    array.sort((a, b) => b - a);
    return array.slice(0, 3);
}

function largest(arr) {
    return Math.max(...arr);
}

const fs = require('fs');
const sets = readFile('input');

function reduceIt(arr) {
    const result = arr.map(innerArr => innerArr.reduce((acc, val) => acc + val, 0));
    return result;
}

function findElf() {
    console.log(sets)
    console.log(sum(topThree(reduceIt(sets))))
}

module.exports = {
    reduceIt, largest, topThree, sum
};


function readFile(file) {
    // Read the file contents
    const fileContents = fs.readFileSync(file, 'utf8');

    // Split the file contents by newlines
    const lines = fileContents.split('\n');

    // Initialize an array to store the sets of numbers
    const sets = [];

    // Initialize a current set
    let currentSet = [];

    // Iterate over each line in the file
    for (const line of lines) {
        // If the line is empty, add the current set to the sets array and reset the current set
        if (line.trim() === '') {
            sets.push(currentSet);
            currentSet = [];
        } else {
            // Otherwise, add the number to the current set
            currentSet.push(parseInt(line, 10));
        }
    }

    // Add the final set to the sets array
    sets.push(currentSet);

    return sets;
}

findElf();


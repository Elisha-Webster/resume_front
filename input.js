
// JSv8
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArray = [];
rl.on('line', function (line) {
    let lines = line.split(' ');
    inputArray.push(lines);
}).on('close', function () {
    let numDays = parseInt(inputArray[0][0]);
    let increaseRate = parseInt(inputArray[0][1]);
    let decreaseRate = parseInt(inputArray[0][2]);
    let totalAnxiety = 0;

    for (let i = 0; i < numDays; i++) {
        totalAnxiety += increaseRate * parseInt(inputArray[1][i]) - decreaseRate * parseInt(inputArray[2][i]);
        totalAnxiety = totalAnxiety <= 0 ? 0 : totalAnxiety;
    }

    console.log(totalAnxiety);
});

// nodejs
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let input = [];
    while (line = await readline()) {
        let tokens = line.split(' ');
        input.push(tokens);
    }
    
}()

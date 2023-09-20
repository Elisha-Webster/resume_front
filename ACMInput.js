
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

// nodejs1
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

// nodejs2
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    //使用多个readline来读取多行数据
    const [n, x] = (await readline()).split(" ").map(Number);

    const pricesA = (await readline()).split(" ").map(Number);
    const pricesB = (await readline()).split(" ").map(Number);

    function minimumCost(n, x, a, b) {
        //写函数
    }
    //函数调用和输出
    const res = minimumCost(n, x, pricesA, pricesB);
    console.log(res);
    rl.close();
})();


// nodejs3
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        const arr = line.split(" ").map(String);    //第一行输入
        const targetLine = await readline();        //第二行输入
        const target = targetLine.split(" ").map(Number);
        console.log(target);
        function lengthOfLongestSubstring(s) {
             //写函数
        }
        //函数调用和输出
        const res = lengthOfLongestSubstring(str);
        console.log(res);
    }
    const res = lengthOfLongestSubstring(str);
    console.log(res);
    rl.close();
})();
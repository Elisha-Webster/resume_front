function parseInput(input) {
  const objArray = eval(input);
  return objArray;
}

function getValue(objArray, property) {
  const values = objArray.map((obj) => obj[property]);
  return JSON.stringify(values);
}

const input = "[{ name: 'zhangsan', age: 23 }, { name: 'lisi', age: 21 }, { name: 'wangwu', age: 23 }]";
const property = 'age';

const objArray = parseInput(input);
const result = getValue(objArray, property);

console.log(result); // 输出："[23,21,23]"

const Api = require('./lib/api');
const api = new Api(); 

console.log("1! = " + api.factorialRegular(1)); // 1
console.log("2! = " + api.factorialRegular(2)); // 1 * 2 = 2
console.log("3! = " + api.factorialRegular(3)); // 1 * 2 * 3 = 6
console.log("4! = " + api.factorialRegular(4)); // 1 * 2 * 3 * 4 = 24
console.log("5! = " + api.factorialRegular(5)); // 1 * 2 * 3 * 4 * 5 = 120
console.log("***");
console.log("1! = " + api.factorialRecursive(1)); // 1
console.log("2! = " + api.factorialRecursive(2)); // 1 * 2 = 2
console.log("3! = " + api.factorialRecursive(3)); // 1 * 2 * 3 = 6
console.log("4! = " + api.factorialRecursive(4)); // 1 * 2 * 3 * 4 = 24
console.log("5! = " + api.factorialRecursive(5)); // 1 * 2 * 3 * 4 * 5 = 120
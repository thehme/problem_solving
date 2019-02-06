// isPrime
// first few numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
// space and time complexity
const Api = require('./lib/api');
const api = new Api();  

console.log("1: " + api.isPrimeRegular(1)); // false
console.log("2: " + api.isPrimeRegular(2)); // true
console.log("3: " + api.isPrimeRegular(3)); // true
console.log("4: " + api.isPrimeRegular(4)); // false
console.log("5: " + api.isPrimeRegular(5)); // true
console.log("6: " + api.isPrimeRegular(6)); // false
console.log("7: " + api.isPrimeRegular(7)); // true

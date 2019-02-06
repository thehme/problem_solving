const Api = require('./lib/api');
const api = new Api();  

console.log(api.sumNumbersRecursively(3)); // expect 6
console.log(api.sumNumbersRecursively(4)); // expect 10
console.log(api.sumNumbersRecursively(5)); // expect 15
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
const Api = require('./lib/api');
const api = new Api(); 

var matrix = [[1, 2, 3, 4], [5, 6, 0, 8], [9, 10, 11, 0]];
console.log(api.zeroColRow(matrix));
  
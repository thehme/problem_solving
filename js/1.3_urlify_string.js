// https://codepen.io/thehme/pen/gZJxYv
// Given a string and its true length, write a method that replaces all the spaces in a string with '%20'
// Example:
// "Marvelous Mrs. Maisel  ", 21
const Api = require('./lib/api');
const api = new Api(); 

var str = "Marvelous Mrs. Maisel  ";
var len = 21;
console.log(api.URLify(str, len));
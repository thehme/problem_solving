// https://codepen.io/thehme/pen/xmeaKE
// Implement an algorithm that determines is a string has all unique characters
const Api = require('./lib/api');
const api = new Api();  

var word = "chemistry";
console.log(word + " has all unique characters: " + api.hasUniqueChars(word));
word = "physics";
console.log(word + " has all unique characters: " + api.hasUniqueChars(word));
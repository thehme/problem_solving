// https://codepen.io/thehme/pen/YdMgyw
// Given two strings, write a method to decide if one is a permutation of the other
// PERMUTATION: this means that one string has the same number of each charter from 
// the other string
const Api = require('./lib/api');
const api = new Api();

var word1 = "cat";
var word2 = "act";
var word3 = "car";
console.log(word2 + " is a permutation of " + word1 + ": " + api.isPermutation1(word1, word2));
console.log(word2 + " is a permutation of " + word1 + ": " + api.isPermutation2(word1, word2));
console.log(word3 + " is a permutation of " + word1 + ": " + api.isPermutation2(word1, word3));
word1 = "mouse";
word2 = "house";
console.log(word2 + " is a permutation of " + word1 + ": " + api.isPermutation2(word1, word2));
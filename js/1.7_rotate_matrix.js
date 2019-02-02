// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to 
// rotate the image by 90 degrees. Can you do this in place?
// Example ASCII encoded and stored in bytes such as:
/**
 * input:
 * [77, 97]
 * [23, 156]
 * 
 * output:
 * [23, 77]
 * [156, 97]
 * 
 * input:
 * [41, 97, 110]
 * [23, 156, 21]
 * [120, 65, 85]
 * 
 * output:
 * [120, 23, 41]
 * [65, 156, 97]
 * [85, 21, 110]
 */

const Api = require('./lib/api');
const api = new Api();

let m = [[41, 97, 110], [23, 156, 21], [120, 65, 85]];
console.log(api.rotateMatrix(m));
// rotateMatrix(m);

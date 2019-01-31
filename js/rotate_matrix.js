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

function rotateMatrix(matrix) {
    let rotatedMatrix = Array(matrix.length, matrix.length);
	for (var row = 0; row < matrix.length; row++) {
		for (var col = 0; col < matrix.length; col++) {
            var temp1 = matrix[row + col][col]; 
            // console.log(temp1);
            var temp2 = matrix[col][matrix.length-1];
            console.log(temp2);
            matrix[col][(matrix.length-1) - row] = temp1;
            matrix[matrix.length-1][matrix.length-1] = temp2;
        }
    }
    return matrix;
};

let m = [[41, 97, 110], [23, 156, 21], [120, 65, 85]];
console.log(rotateMatrix(m));
// rotateMatrix(m);

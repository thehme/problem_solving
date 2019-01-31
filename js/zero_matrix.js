// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
var zeroColRow = function(m) {
    var rows = m.length;
    var cols = m[0].length;
    console.log("rows:" + rows + ", cols:" + cols);
    var hasZeros = [];
    for (var i=0; i<rows; i++) { // rows
        for (var j=0; j<cols; j++) {
            if (m[i][j] === 0) {
            hasZeros.push({row: i, col: j});
            }
        }
    }
    if (hasZeros.length > 0) {
        for (var k=0; k<hasZeros.length; k++) {
            var row = hasZeros[k].row;
            var col = hasZeros[k].col;
            console.log("row:" + row + ", col: " + col);
            for (var i=0; i<rows; i++) { // rows
            for (var j=0; j<cols; j++) { // cols
                if (m[row][j] !== 0) {
                m[row][j] = 0;
                }
                if (m[i][col] !== 0) {
                m[i][col] = 0;
                }
            }
            }
        }
        return m;
    } else {
        return m;
    }
}

var matrix = [[1, 2, 3, 4], [5, 6, 0, 8], [9, 10, 11, 0]];
console.log(zeroColRow(matrix));
  
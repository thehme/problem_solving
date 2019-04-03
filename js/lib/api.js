module.exports = class Api {
    factorialRecursive(n) {
        // base case
        if (n <= 1) {
            return 1;
        } else {
            // recursive section
            return n * this.factorialRecursive(n - 1);
        }
    }

    factorialRegular(n) {
        let total = 1;
        for (var i = 1; i <= n; i++) {
            total *= i;
        }
        return total;
    }

    isPrimeRecursively(n) {
        if (n <= 1) {
            return false;
        } else {
            
        }
    };

    isPrimeRegular(n) {
        if (n <= 1) {
            return false;
        } else {
            var isPrime = true;
            for (var i=2; i<n; i++) {
                if (n%i === 0) {
                    isPrime = false;
                    break;
                }
            } 
            return isPrime;
        }
    };

    sumNumbersRecursively(n) {
        // base case 
        if (n <= 0) {
            return 0;
        } else {
            return n + this.sumNumbersRecursively(n - 1);
        }
    };

    rotateMatrix(matrix) {
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

    isPermutation1(word1, word2) {
        if (word1.length !== word2.length) {
          return false;
        }
        
        var temp1 = word1.split("");
        var temp2 = word2.split("");
      
        
        temp1 = temp1.sort().join();
        temp2 = temp2.sort().join();
        
        return temp1 === temp2;
    };
      
    isPermutation2(word1, word2) {
        if (word1.length !== word2.length) {
            return false;
        }
        
        var countChars1 = {};
        var countChars2 = {};
        
        for (var i=0; i<word1.length; i++) {
            if (i==0) {
                countChars1[word1[i]] = 1;
            } else if (!countChars1[word1[i]]) {
                countChars1[word1[i]] = 1;
            } else {
                countChars1[word1[i]]++;
            }
        }
        
        for (var i=0; i<word2.length; i++) {
            if (i==0) {
                countChars2[word2[i]] = 1;
            } else if (!countChars2[word2[i]]) {
                countChars2[word2[i]] = 1;
            } else {
                countChars2[word2[i]]++;
            }
        }

        console.log(countChars1);
        console.log(countChars2);
        
        for (var i=0; i<word1.length; i++) {
            if (countChars1[word1[i]] !== countChars1[word2[i]]) {
                return false;
            }
        }
        return true;
    };

    hasUniqueChars(word) {
        var hashCounts = {};
        for (var i=0; i< word.length; i++) {
            if (i == 0) {
            hashCounts[word[i]] = 1;
            } else if (!hashCounts[word[i]]) {
            hashCounts[word[i]] = 1;
            } else {
            hashCounts[word[i]]++;
	    console.log(hashCounts);
            return false;
            }
        }
	console.log(hashCounts);
        return true;
    }

    compressString(str) {
        let compressedString = "";
        let counter = 0;
    
        for (var i=0; i<str.length; i++) { // O(n)
            counter++;
            if (str[i+1] != str[i]) {
                compressedString += str[i] + counter; // O(n)
                counter = 0;
            }
        }
        return compressedString;
    };
    
    isCompressed(originalString, compressedString) {
        return originalString.length > compressedString.length;
    };

    URLify(str, len) {
        var temp = [];
        for (var i = 0; i<len; i++) {
          if (str[i] !== " ") {
            temp[i] = str[i];
          } else {
            temp[i] = '%20';
          }
        }
        return temp.join("");
    };

    zeroColRow(m) {
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
}

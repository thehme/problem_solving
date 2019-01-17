// https://codepen.io/thehme/pen/YdMgyw
// Given two strings, write a method to decide is one is a permutation of the other
// PERMUTATION: this means that one string has the same number of each charter from the other string

var isPermutation1 = function(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }
    
    var temp1 = word1.split("");
    var temp2 = word2.split("");
  
    
    temp1 = temp1.sort().join();
    temp2 = temp2.sort().join();
    
    return temp1 === temp2;
  };
  
  var isPermutation2 = function(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }
    
    var countChars1 = {};
    var countChars2 = {};
    
    for (i=0; i<word1.length; i++) {
      if (i==0) {
        countChars1[word1[i]] = 1;
      } else if (!countChars1[word1[i]]) {
        countChars1[word1[i]] = 1;
      } else {
        countChars1[word1[i]]++;
      }
    }
    
    for (i=0; i<word2.length; i++) {
      if (i==0) {
        countChars2[word2[i]] = 1;
      } else if (!countChars2[word2[i]]) {
        countChars2[word2[i]] = 1;
      } else {
        countChars2[word2[i]]++;
      }
    }
    
    for (i=0; i<word1.length; i++) {
      if (countChars1[word1[i]] != countChars1[word2[i]]) {
        return false;
      }
    }
    return true;
  };
  
  var word1 = "cat";
  var word2 = "act";
  console.log(word2 + " is a permutation of " + word1 + ": " + isPermutation1(word1, word2));
  console.log(word2 + " is a permutation of " + word1 + ": " + isPermutation2(word1, word2));
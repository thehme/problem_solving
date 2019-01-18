// Palindrome Permutation: Given a string, write a function to check if it is a 
// permutation of a palindrome. A palindrome is a word or phrase that is the same 
// forward or backwards. A permutation is a rearrangement of letter. The palindrome does not
// need to be limited to just dictionary words.
// Example:
// input: "tact coa"
// output: true, permutation: "taco cat", etc.

var isPermutation = function(word1, word2) {
  if (word1.length !== word2.length) {
      return false;
  }

  var temp1 = word1.split("");
  var temp2 = word2.split("");


  temp1 = temp1.sort().join();
  temp2 = temp2.sort().join();

  return temp1 === temp2;
};

var isPalindromePermutation = function(word1) {
  // determine is word is a palindrome
  if (word1.length !== word1.length) {
      return false;
  }
  
  var temp = [];
  var j = 0;
  for (i=word1.length-1; i>=0; i--) {
    temp[j] = word1[j];
    j++;
  }

  temp = temp.join("");
  // if palindrome, is it a permutation
  if (temp == word1) {
    return isPermutation(temp, word1);
  } else {
    return false;
  }
};

var str = "tact coa";
console.log(str + " is a permutation of a palindrome: " + isPalindromePermutation(str));



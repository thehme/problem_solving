// https://codepen.io/thehme/pen/xmeaKE
// Implement an algorithm that determines is a string has all unique characters

var hasUniqueChars = function(word) {
    var hashCounts = {};
    for (var i=0; i< word.length; i++) {
      if (i == 0) {
        hashCounts[word[i]] = 1;
      } else if (!hashCounts[word[i]]) {
        hashCounts[word[i]] = 1;
      } else {
        hashCounts[word[i]]++;
        return false;
      }
    }
    return true;
  }
  
  var word = "chemistry";
  console.log(word + " has all unique characters: " + hasUniqueChars(word));
  word = "physics";
  console.log(word + " has all unique characters: " + hasUniqueChars(word));
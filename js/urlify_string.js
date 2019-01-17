// https://codepen.io/thehme/pen/gZJxYv
// Given a string and its true length, write a method that replaces all the spaces in a string with '%20'
// Example:
// "Marvelous Mrs. Maisel  ", 21

var URLify = function(str, len) {
    var temp = [];
    for (i = 0; i<len; i++) {
      if (str[i] !== " ") {
        temp[i] = str[i];
      } else {
        temp[i] = '%20';
      }
    }
    return temp.join("");
  }
  
  
  var str = "Marvelous Mrs. Maisel  ";
  var len = 21;
  console.log(URLify(str, len));
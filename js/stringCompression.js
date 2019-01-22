// https://repl.it/@thehme/stringCompressionregular
// Implement a method to perform basic string compression using the counts of 
// repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. You can assume the string has only 
// uppercase and lowercase letters (a - z).

function compressString(str) {
	let compressedString = "";
	let counter = 0;

	for (i=0; i<str.length; i++) { // O(n)
		counter++;
		if (str[i+1] != str[i]) {
			compressedString += str[i] + counter; // O(n)
			counter = 0;
		}
	}
	return compressedString;
};

function isCompressed(originalString, compressedString) {
	return originalString.length > compressedString.length;
};

let str = "aabcccccaaa";
console.log(isCompressed(str, compressString(str)));
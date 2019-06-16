// #[0-9a-fA-F]{6}

var text = `hello this is article about hex colors
the first color is white #ffffff, red is #ff0000
#f24b2e
#FF00BB`;

// A RegExp method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
var regex1 = RegExp('#[0-9a-fA-F]{6}','g');
while (array1 = regex1.exec(str1)) {
    console.log(array1);
}

// A RegExp method that tests for a match in a string. It returns true or false.
var regex = RegExp('#[0-9a-fA-F]{6}');
console.log(regex.test(str)); // if a result found or not

// Most used
//A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
var regex = /#[0-9a-fA-F]{6}/g;
var found = text.match(regex);

console.log(found);
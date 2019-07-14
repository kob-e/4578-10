// function chain - bad practice
(function _main() {
	var x = a();
	b(x)
}());
function a() {
	return 1;
}
function b(x) {
	setTimeout(function() { 
		var result = x * 7 ;
		c(result);
	},2000);
}
function c(result) {
	console.log(result);
}

// better way
(function _main() {
	var x = a();
	bAsync(x, function(result) {
		c(result);
	});
}());
function a() {
	return 1;
}
function bAsync(x, callback) {
	setTimeout(function() { 
		var result = x * 7 ;
		callback(result);
	},2000);
}
function c(result) {
	console.log(result);
}
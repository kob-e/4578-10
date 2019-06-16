var x1 = 1;
var x1str = String(1);
console.log(x1str);

var x1str = '' + x1;
console.log(x1str);

var str = "2";
var strToNumber = Number(str);


"2" == 2 // true
"2" === 2 // false

// always check your input!!!
function multByTwo(num) {
    if (typeof num != 'number') {
        console.log('not a number');
    }

    if (Number.isNaN(num)) {
        console.log('not a number2');
    }

    return num * 2;
}


// falsy values
var b = null;
var b = 0;
var b = undefined;
var b = '';
var b = NaN;

if (b) {
    console.log('inside if');
}
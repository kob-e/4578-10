// try catch
function division(x,y) {
    if (typeof x === 'undefined') {
        throw 'x is undefind';
    } 
    if (y === 0) {
        throw 'cannot divide by 0';
    }
    
    return x / y;
}

var x;
var y = Number(prompt('enter a number'));

try {
    var result = division(x, y);
} catch(ex) {
   console.log(ex);
}
console.log('hello');

try {
    console.log(g.a);
} catch(ex) {
    alert('why')
}
console.log(1);

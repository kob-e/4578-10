'use strict';
a();

function a() {
    console.log('a');
}

/* interpeter */
function a() {
    console.log('a');
}
a();


/* scope */

// var x = 30;
var y = 20;
function dec() {
    window.x = 10;
    console.log('x',x);
    console.log('y',y);
}
dec();
console.log('x',x);
console.log('y',y);


// bad practice
var y = 20;
function dec() {
    var x = z = 10; // z is in the global scope
    console.log('x',x);
    console.log('z',z);
}
dec();
console.log('x', x);
console.log('z', z);

// good practice
// bad practice
var y = 20;
function dec() {
    var x = 10;
    var z = 10; // z is in the global scope
    console.log('x',x);
    console.log('z',z);
}
dec();
console.log('x',x);
console.log('z',z);

// ex 6 - to fix
// 12345 -> 54321
var num = 12345;

var reverse = 0;
while (num > 0 ) {
    reverse += num % 10;
    reverse = reverse * 10;
    // reverse = reverse + num % 10;
    num = parseInt(num /10);
}
console.log(reverse);

/* ----------------------- ex 8 ------------------------------- */
var num = 4;
var pow = 4;
var result = 1;
while (pow > 0) {
    result *= num;
    pow--;
}
console.log(result)

/* ---------------------- ex 14-------------------------------- */
var max = 1000;
var current = 1;
var beforeCurrent = 0;
while (current <= max) {
    console.log(current);
    var temp = current;
    current = beforeCurrent + current;
    beforeCurrent = temp;

}
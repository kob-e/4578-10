/* ex1 recursion */
// 4 -> 'hello 4', 'hello 3', 'hello 2', 'hello 1'
function sayHello(num) {
    if (num == 0) {
        return;
    }
    console.log('hello', num);
    sayHello(num - 1);
}

sayHello(4);


/* ex1 recursion 
    * 5 -> 5 + 4 + 3 + 2 + 1 = 15
*/

var num = 5;
function sum(num) {
    if (num == 1) {
        return 1;
    }
    return num + sum(num - 1);
}
sum(num);








/* ----------------------- ex 8 ------------------------------- */
var num = 4;
var pow = 4;
var result = 1;
while (pow > 0) {
    result *= num;
    pow--;
}
console.log(result)
/*---------------- ex 8 recursion------------- */
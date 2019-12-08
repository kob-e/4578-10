

function *yieldFunc() {
    yield 1;
    yield 10;
    yield 50;
}

const a = yieldFunc();
//console.log(a.next())

let i = a.next()
while (!i.done) {
    console.log(i.value);
    i= a.next()
}
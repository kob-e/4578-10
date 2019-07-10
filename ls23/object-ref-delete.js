const a1 = {
    a: 1
}

const a2 = {
    a: 1
}

const a3 = a2;
console.log(a1 == a2); // false

console.log(a2 == a3); // true

// delete
delete a2.a;
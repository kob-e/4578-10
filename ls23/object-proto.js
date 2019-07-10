function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person('name', 32);

console.log(p1.sayHi());

Person.prototype.sayHi = function() {
    return 'Hi';
}


// anonymous object
var p1 = {
    age: 21,
    name: 'Name 1'
}

// function constructor
function Person(age, name) {
 
    this.age = age;
    this.name = name;
}
debugger;
// object of type person
var p2 = new Person(22, 'my name');
var p3 = new Person(26, 'myname3');

p2.age = 66;
alert(p2.name);
function g() {
    var dd = 43;
}
g();
delete p2;
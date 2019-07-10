// other way to create objects
const o1 = Object.create(Object.prototype);
const o2 = {}; // same as o1


function Person(name, age) {
    this.name = name[0].toUpperCase() + name.slice(1,name.length);
    this.age = age;
}

const p1 = new Person('name', 32); // create TYPED object

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

function Lecturer(name, age, langs) {
    Person.call(this, name, age);
    this.langs = langs;
}

Student.prototype = Object.create(Person.prototype);
Lecturer.prototype = Object.create(Person.prototype);

const s1 = new Student('name', 22, 33);
const l1 = new Lecturer('name', 33, ['JavaScript']);
function Animal(type, nickname, age) {
    this.type = type;
    this.nickname = nickname;
    this.age = age;

    this.voice = function () {
        return 'Animal voice';
    }
}

function Cat(nickname, age) {
    Animal.call(this, 'Cat', nickname, age);
}

function Dog(nickname, age) {
    Animal.call(this, 'Dog', nickname, age);

    // Override
    this.voice = function () {
        return 'How';
    }
}

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);

const c1 = AnimalFactory('cat', 'Lusy', 22);
const d1 = AnimalFactory('dog', 'Max', 15);

console.log(c1, d1);

// instanceof
console.log(c1 instanceof Dog);
console.log(c1 instanceof Cat);

function AnimalFactory(type, nickname, age) {
    switch (type) {
        case 'dog':
            return new Dog(nickname, age);
        case 'cat':
            return new Cat(nickname, age);
    }
}
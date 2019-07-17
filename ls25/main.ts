class Animal {
    age: number;
    name: string;
    
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
        
    }

    voice() {
        return `${this.name} return Animal's voice`;
    }
}

class Dog extends Animal  {

    constructor(age: number, name: string) {
        super(age, name);
    }
    voice() {
        return 'How';
    }
}

var n1 = new Dog(1, 'd');
n1.voice();


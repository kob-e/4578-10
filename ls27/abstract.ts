
abstract class Animal {
    protected name;
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    abstract voice(a): string;
}

class Dog extends Animal {
    constructor() {
        super(name);
    }

    voice() {
        return 'How';
    }
} 

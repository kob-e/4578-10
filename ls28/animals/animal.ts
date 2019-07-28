export abstract class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    feed() {
        return true;
    }
}


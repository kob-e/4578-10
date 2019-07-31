interface IAnimal {
    voice(): string;
}

class Lion implements IAnimal {
    voice(): string {
        return '';
    }
}

class Horse implements IAnimal {
    voice(): string {
        return '';
    }
}
class NoInheritance {}

class TestAnimal {
    checkVoice(animal: IAnimal) {
        return animal.voice() == 'test';
    }
}

const ta1 = new TestAnimal();
ta1.checkVoice(new Horse());
ta1.checkVoice(new Lion());
ta1.checkVoice(new NoInheritance());

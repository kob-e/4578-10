import { Person } from "./accessors-person";

class Male extends Person {
    constructor(tz: number, name: string) {
        super(tz, name);
    }

    public getName2() {
        return this.name;
    }
    public getTz2() {
        return this.tz;
    }

    public getBirthDate() {
        return this.birthDate;
    }
}

const p1 = new Person(123, 'Shalom');
console.log(p1.name);
console.log(p1.tz);
console.log(p1.birthDate);

const m1 = new Male(123, 'Shalom');
console.log(m1.name);
console.log(m1.getTz());

export class Person {
    private tz: number;
    public name: string;
    protected birthDate: Date;

    constructor(tz: number, name: string) {
        this.tz = tz;
        this.name = name;
        this.birthDate = new Date();
    }

    public getTz() {
        console.log(this.tz);
        return this.tz;
    }
}

export class B {

}
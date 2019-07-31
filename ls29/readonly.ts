class StudyClass {
    public static readonly MAX_STUDENT = 20;
    public static myStr2 = 'Stringy2';

    public a: string;
    toString() {
        return StudyClass.myStr2;
    }
}

const e1 = new StudyClass();
const e2 = new StudyClass();
const e3 = new StudyClass();

console.log(StudyClass.MAX_STUDENT);
console.log(StudyClass.myStr2);

console.log(e1.toString())
console.log(e2.toString())
console.log(e3.toString())




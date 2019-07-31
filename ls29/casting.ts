// <>

class CheckClassA {
   
}

class CheckClassB {
    public prop1: string;
    public prop2: string;


} 

class CheckClassC {}


const o = {};

const p = <CheckClassA>o;

const myObj = <CheckClassB>{
    prop1: 'a',
    prop2: 'b'
}

const myObj2: CheckClassB = new CheckClassB();
myObj2.prop1 = 'a';
myObj2.prop2 = 'b';

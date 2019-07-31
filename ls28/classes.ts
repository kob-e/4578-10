interface Abs {

}

class CC {}

class AA implements Abs {}

class BB implements Abs {}

const arr: Abs[] =[];
arr.push(new CC());
 
let arr2: [AA];
arr2 = [new AA(), new BB(), new CC()];

console.log(arr[0] instanceof AA)
console.log(arr[0] instanceof BB)
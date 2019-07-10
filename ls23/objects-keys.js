const myObj = {
    a: 1
}

myObj.a = 'str';

myObj['b'] = 'str2';

// object keys
const myObjKeys = Object.keys(myObj);

const firstProp = myObjKeys[0];

console.log(myObj[firstProp]);

// for in loop
for (let prop in myObj) {
    console.log(myObj[prop]);
}

// equals to
const keys = Object.keys(myObj);
for (let i=0 ; i < keys.length; i++) {
    keys[i];
}
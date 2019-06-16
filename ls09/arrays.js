var myArray = [2, 6, 12, 2323, 34, 12 ,4 ,5];

console.log(myArray[0] * 10);
console.log(myArray[1] * 10);
console.log(myArray[2] * 10);
console.log(myArray[3] * 10);


for(var i=0; i < myArray.length; i++) {
    console.log(myArray[i] * 10);
}

var myPlants = ["Rose", "Geranium", "Ficus", "Tulip", "Cannabis"];

var j = 0;
while(j < myPlants.length) {
    if (myPlants[j] != null) {
        console.log("The plant name is: " + myPlants[j]);
    }
    j++;
}

/*
for(var k=0; i < 10; i++) {
    console.log(i);
}

for(var k=20; i < 30; i++) {
    console.log(i);
}

for(var k=41; i < 45; i++) {
    console.log(i);
}
*/

/* name for a code block */
function namename1() {
    for(var i=0; i < 10; i++) {
        console.log(i);
    }
}
namename();

/* name for a code block with paramter*/
function namename2(max) {
    for(var i=0; i < max; i++) {
        console.log(i);
    }
}
namename2(10);
namename2(20);


/* name for a code block with paramter*/
function namename3(max) {
    var sum = 0;
    for(var i=0; i < max; i++) {
        sum += i;
    }

    return sum;
}
var x1 = namename3(10); // 45
var x2 = namename3(20); // 190
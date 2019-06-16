/* without break */
var age = 15;
switch (age) {
    case 14:
        console.log("var is 15");
    case 15: 
        console.log("var is 15");
    case 16: 
        console.log("var is 16");
    default:
        console.log(age);
}
/*if else */
var age = 15;
if (age == 14) {
    console.log("var is 14");
    console.log("var is 15");
    console.log("var is 16");
}
if (age == 15) {
    console.log("var is 15");
    console.log("var is 16");
}
if (age == 16) {
    console.log("var is 16");
}
if (age != 14 && age != 15 && age != 16) {
    console.log(age);
}


/* with break */
var age = 15;
switch (age) {
    case 14:
        console.log("var is 15");
        break;
    case 15: 
        console.log("var is 15");
        break;
    case 16: 
        console.log("var is 16");
        break;
    default:
        console.log(age);
}
/*if else */
var age = 15;
if (age == 14) {
    console.log("var is 14");
}
if (age == 15) {
    console.log("var is 15");
}
if (age == 16) {
    console.log("var is 16");
}
if (age != 14 && age != 15 && age != 16) {
    console.log(age);
}
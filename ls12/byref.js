var myObj = {
    a: 1
}

function addToObj(o) {
    o.newValue = "hello";
}

var copied = copyObject(myObj);
addToObj(copied); // this changes the outer object! - by reference

function copyObject(o) {
    var _$_ = {};
    _$_.a = o.a
    return _$_;
}

var myObj2 = myObj; // this is a link!!!
var myObj3 = copyObject(myObj); // this is a new object
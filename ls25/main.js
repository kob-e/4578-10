"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age, name) {
        this.age = age;
        this.name = name;
    }
    Animal.prototype.voice = function () {
        return "abxxxxxxxxxx " + this.name + " return Animal's voice";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, name) {
        return _super.call(this, age, name) || this;
    }
    Dog.prototype.voice = function () {
        return 'How';
    };
    return Dog;
}(Animal));
var n1 = new Dog(1, 'd');
n1.voice();

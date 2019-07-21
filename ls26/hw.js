"use strict";
var Chair = /** @class */ (function () {
    function Chair(Material, color, length, width, height) {
        this.Material = Material;
        this.Color = color;
        this.Length = length;
        this.Width = width;
        this.Height = height;
        Chair.count++;
    }
    Object.defineProperty(Chair.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (c) {
            var allowedColors = ['Black', 'White', 'Red', 'Green', 'Blue'];
            var allowedColorsLowerCase = allowedColors.map(function (c) {
                return c.toLowerCase();
            });
            if (allowedColorsLowerCase.indexOf(c.toLowerCase()) > -1) {
                this._color = c;
            }
            else {
                throw "Color not listed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "Length", {
        get: function () {
            return this._length;
        },
        set: function (x) {
            if (x > -1) {
                this._length = x;
            }
            else {
                throw "Only positive";
            }
        },
        enumerable: true,
        configurable: true
    });
    Chair.prototype.calcVolume = function () {
        return this.Height * this.Width * this.Length;
    };
    Chair.prototype.toString = function () {
        return "Color: " + this.Color + ", Material: " + this.Material + ", Volume: " + this.calcVolume();
    };
    Chair.count = 0;
    return Chair;
}());
try {
    var c1 = new Chair('s', 'Blue', 1, 1, 1);
    var c2 = new Chair('s', 'Blue', 1, 1, 1);
    var c3 = new Chair('s', 'Blue', 1, 1, 1);
    var c4 = new Chair('s', 'Blue', 1, 1, 1);
    console.log(Chair.count);
    // c1._color = 'gg';
}
catch (ex) {
}
var ColorType;
(function (ColorType) {
    ColorType[ColorType["red"] = 0] = "red";
    ColorType[ColorType["blue"] = 1] = "blue";
    ColorType[ColorType["black"] = 2] = "black";
})(ColorType || (ColorType = {}));

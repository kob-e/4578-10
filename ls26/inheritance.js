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
var Device = /** @class */ (function () {
    function Device(model, screenSize, installedApps, os, manufacturer) {
        this.model = model;
        this.screenSize = screenSize;
        this.installedApps = installedApps;
        this.os = os;
        this.manufacturer = manufacturer;
        Device.counter++;
    }
    Device.prototype.print = function () {
        return "model: " + this.model + ",\n        screenSize: " + this.screenSize + ",\n        installedApps: " + this.installedApps + ",\n        os: " + this.os + ",\n        manufacturer: " + this.manufacturer.print();
    };
    Device.counter = 0;
    return Device;
}());
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet(model, screenSize, installedApps, os, manufacturer, pro) {
        var _this = _super.call(this, model, screenSize, installedApps, os, manufacturer) || this;
        _this.pro = pro;
        return _this;
    }
    Tablet.prototype.print = function () {
        return "pro: " + this.pro + ", " + _super.prototype.print.call(this);
    };
    return Tablet;
}(Device));
var CellPhone = /** @class */ (function (_super) {
    __extends(CellPhone, _super);
    function CellPhone(model, screenSize, installedApps, os, manufacturer, simCompany) {
        var _this = _super.call(this, model, screenSize, installedApps, os, manufacturer) || this;
        _this.simCompany = simCompany;
        return _this;
    }
    CellPhone.prototype.print = function () {
        return "simCompany: " + this.simCompany + ", " + _super.prototype.print.call(this);
    };
    return CellPhone;
}(Device));
var Manufacturer = /** @class */ (function () {
    function Manufacturer(country, yearFounded, serviceCoverage, website, name) {
        this.country = country;
        this.yearFounded = yearFounded;
        this.serviceCoverage = serviceCoverage;
        this.website = website;
        this.name = name;
    }
    Manufacturer.prototype.print = function () {
        return "country: " + this.country + ", \n        yearFounded: " + this.yearFounded + ",\n        serviceCoverage: " + this.serviceCoverage + ",\n        website: " + this.website + ",\n        name: " + this.name;
    };
    return Manufacturer;
}());
var m1 = new Manufacturer('USA', 1973, ['usa', 'israel'], 'apple.com', 'Apple Inc.');
var d1 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
var d2 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
var d3 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
var d4 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
var d5 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
console.log(d1.print());
console.log(Device.counter);

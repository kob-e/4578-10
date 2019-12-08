const DataModel = require('./data.modal');

 function CityModel(args) {
    DataModel.call(this, args.createdDate, args.updatedDate); // #1
    this.ID = args.ID;
    this.Name = args.Name;
    this.CountryCode = args.CountryCode;
    this.CountryCodeModel = args.CountryCodeModel;
    this.Distirct = args.Distirct;
    this.Population = args.Population;
}
CityModel.prototype = Object.create(DataModel.prototype); // #2

CityModel.prototype[Symbol.iterator] = function *() {
    for(let prop in this) {
        if (prop.indexOf('sys') !== 0) {
            yield this[prop];
        }
    }
}

module.exports = CityModel;
const DataModel = require('./data.modal');

function CountryModel(args) {

}

CountryModel.prototype = Object.create(DataModel.prototype);


module.exports = CountryModel;
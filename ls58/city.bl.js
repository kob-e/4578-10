const cityModel = require('./city.model');
const countryBl = require('./countryBl');

function get(lazyLoad = false, callback) {
    let arr = [{
        ID: 1,
        Name: 'name',
        CountryCode: 'CountryCode',
        CountryCodeModel: null,
        Distirct: 'Distirct',
        Population: 'Population',
        createdDate: new Date,
        updatedDate: new Date
    }]; // from dal;
    arr = arr.map(c => new cityModel(c));

    if (lazyLoad) {
        arr = arr.map(c => c.CountryCodeModel = countryBl.get(c.CountryCode));
    }
    callback(arr);
}

function create(city, callback) {
    city.sysCreatedDate = city.sysUpdatedDate = new Date;
    // dal create
}

function update() {
    city.sysUpdatedDate = new Date;

}

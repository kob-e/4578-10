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
        const promises = [];

        arr.forEach(c => promises.push(countryBl.get(c.CountryCode)));

        Promise.all(promises).then(res => {
            console.log(res);
            console.log('all done')
        })
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

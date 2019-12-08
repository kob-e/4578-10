const countryModel = require('./country.model');

function get(lazyLoad = false, callback) {
  
    callback(new countryModel({}));
}

function create(country, callback) {
    city.sysCreatedDate = city.sysUpdatedDate = new Date;
    // dal create
}

function update() {
    city.sysUpdatedDate = new Date;

}

module.exports = {
    get: get,
    create: create,
    update: update
}

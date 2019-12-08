const cityModel = require('./city.model');

function get(callback) {
    let arr = [{ID: 1}]; // from dal;
    arr = arr.map(c => new cityModel(c));

    callback(arr);
}

function create(city, callback) {
    city.sysCreatedDate = city.sysUpdatedDate = new Date;
    // dal create
}

function update() {
    city.sysUpdatedDate = new Date;

}

function delete() {

}
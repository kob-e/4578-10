const CityModel = require('./city.model');


const c1 = new CityModel({
    ID: 1,
    Name: 'name',
    CountryCode: 'CountryCode',
    CountryCodeModel: null,
    Distirct: 'Distirct',
    Population: 'Population',
    createdDate: new Date,
    updatedDate: new Date
});
// console.log(c1);

//for (let val of c1) {
//    console.log(val)
//}
var o = {a: 1}
for (let val of o) console.log(val);

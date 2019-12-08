const mysql = require('mysql');
const { promisify } = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world'
});

connection.connect();

function get(_query, callback) {
    connection.query(_query, (err, data) => {
        if (err) callback(err);
        else callback(null, data)
    });
}

function get(_query) {
    return new Promise((rs, rj) => {
        connection.query(_query, (err, data) => {

            if (err) rj(err);
            else rs(data)
        })
    })
}
const promises = [];
promises.push(get('select * from city limit 1'));
promises.push(get('select * from city limit 1'));

Promise.all(promises).then(res => {
    console.log(res);
    console.log('all done')
})

//get('select * from city').then(res => console.log(res));
//get('select * from city').then(res => console.log(res));


// connection.end();
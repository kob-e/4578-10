const express = require('express')
const app = express()
const dns = require('dns');

const port = 3300

app.get('/', function (req, res) {
    var id = req.query.id;
    isWebsiteAlive(id, function (e, ip) {
        if (e) {
            res.send('Not exist!');
        } else {
            res.send(ip);
        }
    })

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function isWebsiteAlive(addr, cb) {
    dns.resolve4(addr, function (e, v) {
        if (e) {
            cb('not exist');
        }
        else {
            cb(null, v[0]);
        }
    })
}
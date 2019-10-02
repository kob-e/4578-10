const fs = require('fs');
const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = 3200;
const os = require('os');

app.get('/contact', function (req, res) {
    const qs = req.query;
    console.log(qs);
    // name, phone, city
    fs.appendFile('contact.txt', [qs.name, qs.phone, qs.city].join(',') + os.EOL, function (e) {
        if (e) {
            console.log(e);
            res.send('Error in saving');
        } else {
            res.send('Your details saved!')
        }
    })

})



app.listen(PORT, () => console.log('server on'));
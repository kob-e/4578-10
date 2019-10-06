const fs = require('fs');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3200;
const CONTACT_FILE = 'contact.txt';
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/contact-add', function (req, res) {
    const qs = req.query;
    if (!qs.name && !qs.phone && !qs.city) {
        res.send('all params required');
        return;
    }

    const o = {
        name: qs.name,
        phone: qs.phone,
        city: qs.city
    }
    fs.readFile(CONTACT_FILE, function (e, d) {
        const contactsArray = d.length > 0 ? JSON.parse(d.toString()) : [];
        contactsArray.push(o);

        fs.writeFile(CONTACT_FILE, JSON.stringify(contactsArray), function (e) {
            if (e) {
                console.log(e);
                res.status(400).send('Error in saving');
            } else {
                res.send('Your details saved!')
            }
        })
    })
})

app.get('/contact-delete', function (req, res) {
    const qs = req.query;
    if (!qs.phone) {
        res.send('phone required');
        return;
    }
    fs.readFile(CONTACT_FILE, function (e, d) {
        let contactsArray = d.length > 0 ? JSON.parse(d.toString()) : [];
        contactsArray = contactsArray.filter(c => c.phone != qs.phone)

        fs.writeFile(CONTACT_FILE, JSON.stringify(contactsArray), function (e) {
            if (e) {
                console.log(e);
                res.send('Error in saving');
            } else {
                res.send('Deleted!')
            }
        })
    })
})


app.listen(PORT, () => console.log('server on'));


/*
 // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await userService.authenticate({ username, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }
*/
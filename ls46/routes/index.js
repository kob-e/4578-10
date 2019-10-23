var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
function getCtrl(req, res, next) {
    const title = req.body.fname ? `thanks ${req.body.fname}` : 'Welcome to Express';

    res.render('index', { title: title });
}

function postCtrl(req, res, next) {
    const contact = {
        fname: req.body.fname,
        phone: req.body.phone
    }
    saveContactToFile(contact, (e) => {
        return next();
    })
};

function saveContactToFile(contact, callback) {
    fs.readFile('contacts.txt', (e, d) => {
        const contactsData = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        contactsData.push(contact);
        fs.writeFile('contacts.txt', JSON.stringify(contactsData), (e) => {
            if (e) {
                console.log(e);
                callback('error');
            }
            else {
                callback(null);
            }
           
        });
    });
}




router.get('/', getCtrl);
router.post('/', postCtrl, getCtrl);
module.exports = router;

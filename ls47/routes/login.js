var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login');
});
router.post('/', function (req, res) {
    if (req.body.username == 'abc' && req.body.password == '123') {
        req.session.xyz = true;
        req.session.rand = Math.random();
        req.session.username = req.body.username;
        res.redirect('/runner/list');
    } else {
        res.redirect('/login');
    }
});

router.get('/end', function (req, res) {
    req.session = null;
    res.render('login');
});

module.exports = router;
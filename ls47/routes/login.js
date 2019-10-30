var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login');
});
router.post('/', function (req, res) {
    if (req.body.username == 'abc' && req.body.password == '123') {
        req.session.xyz = true;
        req.session.rand = Math.random();
        res.redirect('/runner/list');
    } else {
        res.redirect('/login');
    }
});
module.exports = router;
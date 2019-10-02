const express = require('express');
const app = express();

const PORT = 3300;

app.get('/', function (req, res) {
    var id = req.query.id;
    console.log('hello ' + id);
    res.json('<h2>hello</h2> ' + id);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

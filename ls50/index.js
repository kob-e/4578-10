const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3201;
const phoneBl = require('./phonebl');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const phoneRouter = require('./routes/phone');

app.use('/phone', phoneRouter);

app.listen(process.env.PORT || PORT, () =>
    console.log(`App listening on port ${process.env.PORT || PORT}!`),
);
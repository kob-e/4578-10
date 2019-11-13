const express = require('express');
const bodyParer = require('body-parser');
const path = require('path');
const atob = require('atob');
const app = express();
const PORT = 6767;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParer.json());

app.post('/auth', function (req, res) {
    const { user, pass } = splitCredentials(req.headers.authorization);
    if (!user) {
        res.status(401).send();;
    } else {
        console.log(user, pass);
        res.send();
    }
})

function splitCredentials(str) {
    const authHeader = str.split(' ');
    if (authHeader[0] === 'basic') {
        return {
            user: atob(authHeader[1]).split(':')[0],
            pass: atob(authHeader[1]).split(':')[1]
        }
    }
}


app.listen(PORT, () => {
    console.log(`server up at ${PORT}`);
})
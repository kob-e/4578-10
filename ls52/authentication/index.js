const express = require('express');
const bodyParer = require('body-parser');
const path = require('path');
const atob = require('atob');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 6767;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParer.json());

app.use(function (req, res, next) {
    if (req.method === 'POST' && req.path === '/auth') {
        next();
    }
    else {
        try {
            const token = jwt.verify(splitCredentials(req.headers.authorization), 'shhhhh');
            next();
        } catch (ex) {
            console.log(ex);
            res.status(403).send();
        }
    }
})

app.post('/auth', function (req, res) {
    const { user, pass } = splitCredentials(req.headers.authorization);
    if (!user) {
        res.status(403).send();
    } else {
        if (user === 'student' && pass === 'pass123') {
            const token = jwt.sign({
                user: user,
            }, 'shhhhh',
                {
                    expiresIn: 333
                });
            res.send(token);
        } else {
            res.status(403).send();
        }
    }
});

app.get('/service', function (req, res) {
    res.send();
})

function splitCredentials(str) {
    const authHeader = str.split(' ');
    if (authHeader[0] === 'basic') {
        return {
            user: atob(authHeader[1]).split(':')[0],
            pass: atob(authHeader[1]).split(':')[1]
        }
    } else if (authHeader[0] === 'bearer') {
        return authHeader[1];
    }
}


app.listen(PORT, () => {
    console.log(`server up at ${PORT}`);
})
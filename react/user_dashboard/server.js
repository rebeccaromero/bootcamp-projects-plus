const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var users= [];

app.post('/api/users', (req, res) => {
    console.log('POSTING');
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.send('Successful post');
})

app.get('/api/users', (req, res) => {
    console.log('SUCCESSFUL API CALL');
    res.send(users);
})

app.post('/check-name', (req, res) => {
    var exists = false;
    var index;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === req.body.name) {
            exists = true;
            index = i;
        }
    }
    res.send({exists: exists, index: index});
})

app.post('/match-password', (req, res) => {
    var match = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === req.body.name) {
            exists = true;
        }
    }
    res.send(match);
})

app.listen(3333);
console.log('Listening on 3333');
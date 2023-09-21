// Libraries
const express = require('express');    // Library that handles the server endpoints
const fs = require('fs');              // Library that handles READ/WRITE to files

// Config
const app = express();                 // Library constant set to app
app.use( express.json() );             // All GET requests get parsed with JSON

const PORT = 3000;                     // Port that will host the web app

// --------------------------------------------------------------------
// USER INSTANTIATION **VERY IMPORTANT** (LITERALLY NOT JOKING) A joke
// --------------------------------------------------------------------
let users = require('./users.json'); // <------------

// Server Endpoints
app.get('/lsit/all', (req, res) => {
    res.status(200).json(users);
});

app.get('/list/username/:username', (req, res) => {
    let user = users.find(x => x.username.toString() === req.params.username);
    res.status(200).json(user);
});

app.get('/list/email/:email', (req, res) => {
    let user = users.find(x => x.email.toString() === req.params.email);
    res.status(200).json(user);
});

app.post('/add', (req, res) => {
    let user = {
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    };

    users.push(user);

    fs.writeFile('./users.json', JSON.stringify(users, null, 2), function(err) {
        if (err) {
           res.status(500).send(err);
        }
    });

    res.status(200).json(user);
    res.send("Successfully done... I hope!!");
});

app.delete('/delete/username/:username', (req, res) => {
    let index = users.findIndex(x => x.username.toString() === req.params.username);
    users.splice(index, 1);

    fs.writeFile('./users.json', JSON.stringify(users, null, 2), function(err) {
        if (err) {
           res.status(500).send(err);
        }
    });

    res.send("Successfully done... I hope!!");
});

app.delete('/delete/email/:email', (req, res) => {
    let index = users.findIndex(x => x.email.toString() === req.params.email);
    users.splice(index, 1);

    fs.writeFile('./users.json', JSON.stringify(users, null, 2), function(err) {
        if (err) {
           res.status(500).send(err);
        }
    });

    res.send("Successfully done... I hope!!");
});

// Server Hosting Starts
app.listen(
    PORT,
    () => console.log('I am alive!! I mean, the server is... *cough cough*') // A joke
);
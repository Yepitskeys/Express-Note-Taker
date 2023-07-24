const router = require("express").Router();
const store = require("../db/db.json");
const fs = require('fs');
let notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        notes.push(newNote);

        let stringNotes = JSON.stringify(notes, null, 3);

        fs.writeFile(`./db/db.json`, stringNotes, (err) =>
        err
            ? console.error(err)
            : console.log(`Note was added!`) 
        );

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
    } 
});


module.exports = router;
'use strict';
const express = require('express');
const router = express.Router();
const Book = require('../Books/books');

router.get('/api/books', (req, res) => {

    const {name} = req.query;
    const query = {};

    if(name) {
        query.name = name;
    }
    Book.find(query).exec((error, data) => {
        if(error) {
            res.status(400).json(error);
            return;
        }
        res.json(data);
    });
});

module.exports = router;
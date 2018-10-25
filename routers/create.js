'use strict';
const express = require('express');
const router = express.Router();
const Book = require('../Books/books');
router.post('/api/books', (req, res) => {
    const book = new Book(req.body);
    book.save((error, data) => {
        if (error) {
            res.status(400).json(error);
            return;
        }
        res.json(data);
    });
});

module.exports = router;
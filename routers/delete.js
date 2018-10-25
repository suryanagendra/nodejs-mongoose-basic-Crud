'use strict';
const express = require('express');
const router = express.Router();

const Book = require('../Books/books');

router.delete('/api/books/:userId', (req, res) => {
const userId = req.params.userId;
Book.findByIdAndRemove(userId).exec((error, result) => {
    if(error) {
        res.status(400).json(error);
        return;
    }
    res.json(result);
});
});

module.exports = router;
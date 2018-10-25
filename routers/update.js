'use strict';
const express = require('express');
const router = express.Router();

const Book = require('../Books/books');

router.put('/api/books/:userId', (req, res) => {
    const data = req.body;
    const userId = req.params.userId;
    Book.findByIdAndUpdate(userId, data, {new: true}).exec((error, result) =>{
      if(error) {
          res.status(400).json(error);
          return;
      }
      res.json(result);
    });
});
module.exports = router;
'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Books')
.then(() =>{
console.log('Connected to DB');
})
.catch(error => {
 console.log(error);
});
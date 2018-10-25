const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
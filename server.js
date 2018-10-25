'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
require('./Books/db');
const Book = require('./Books/books');
const bookRouterfetch = require('./routers/fetch');
const bookRoutercreate = require('./routers/create');
const bookRouterupdate = require('./routers/update');
const bookRouterdelete = require('./routers/delete');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bookRouterfetch);
server.use(bookRoutercreate);
server.use(bookRouterupdate);
server.use(bookRouterdelete);

server.listen(4000, () => {
    console.log('Server started')
})
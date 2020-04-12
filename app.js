const express = require('express');
const morgan = require('morgan');

const app = express();
const rotaProdutos = require('./routes/produtos');

app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);

module.exports = app;

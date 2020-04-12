const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  // aceitar dados simples.
app.use(bodyParser.json()); // json de entrada no body.

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Rota não encontrada
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada!');

    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;

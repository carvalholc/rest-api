const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  // aceitar dados simples.
app.use(bodyParser.json()); // json de entrada no body.

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permissão de Controle de Acesso Origem = Todos '*'.
    res.header(
        'Access-Control-Allow-Header', 'Content-Type', 'Accept', 'Authorization'
    ); // Permissão de Controle de Acesso Cabeçalho [...]

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({}); // Por equanto retornar vazio.
    };

    next();
});

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

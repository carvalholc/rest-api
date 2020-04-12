const express = require('express');

const router = express.Router();

// Retorna os dados de todos os pedidos.
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos.'
    });
});

// Insere um pedido.
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };

    res.status(201).send({
        mensagem: 'Pedido Incluido.',
        pedidoCriado: pedido
    });
});

// Retorna os dados de um pedido.
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: `Retorna um pedido. [ ${id} ]`,
        id: id
    });
});

// Altera um pedido.
/* Não iremos alterar um pedido.
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido Alterado.'
    });
});
*/

// Exclui um pedido.
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido Excluido.'
    });
});

module.exports = router;

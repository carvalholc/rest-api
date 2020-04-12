const express = require('express');

const router = express.Router();

// Retorna os dados de todos os produtos.
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos.'
    });
});

// Insere um produto.
router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Produto Incluido.',
        produtoCriado: produto
    });
});

// Retorna os dados de um produto.
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: `Retorna um produto. [ ${id} ]`,
        id: id
    });
});

// Altera um produto.
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto Alterado.'
    });
});

// Exclui um produto.
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto Excluido.'
    });
});


module.exports = router;

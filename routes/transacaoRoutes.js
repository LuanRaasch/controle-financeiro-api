const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.post('/', transacaoController.criarTransacao);

router.put('/:id', transacaoController.atualizarTransacao);

router.get('/:id', transacaoController.visualizarTransacao);

router.delete('/:id', transacaoController.excluirTransacao);

module.exports = router;

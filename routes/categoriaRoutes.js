const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', categoriaController.criarCategoria);

router.put('/:id', categoriaController.atualizarCategoria);

router.get('/:id', categoriaController.visualizarCategoria);

router.delete('/:id', categoriaController.excluirCategoria);

module.exports = router;

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.criarUsuario);

router.put('/:id', usuarioController.atualizarUsuario);

router.get('/:id', usuarioController.visualizarUsuario);

router.delete('/:id', usuarioController.excluirUsuario);

router.post('/login', [
    body('email').isEmail().normalizeEmail(),
    body('senha').isLength({ min: 5 }).trim().escape(),    
], usuarioController.loginUsuario);

module.exports = router;

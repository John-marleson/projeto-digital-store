const express = require('express')
const router = express.Router()

const usuarioController = require('../controller/usuariosController')
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware')

router.get('/:id', (req, res) => usuarioController.usuariosGetById(req, res))
router.post('/', (req, res) => usuarioController.usuarioPost(req, res))
router.put('/:id', (req, res) => usuarioController.usuarioPut(req, res))
router.delete('/:id', (req, res) => usuarioController.usuarioDelete(req, res))

module.exports = router;
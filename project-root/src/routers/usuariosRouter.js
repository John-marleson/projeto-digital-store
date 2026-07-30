const express = require('express')
const router = express.Router()

const usuarioController = require('../controller/usuariosController')
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware')

router.get('/', (req, res) => usuarioController(req, res))
router.post('/', (req, res) => usuarioController.usuarioPost(req, res))
router.put('/', (req, res) => usuarioController.usuarioPut(req, res))
router.delete('/', (req, res) => usuarioController.usuarioDelete(req, res))

module.exports = router;
const express = require('express')
const router = express.Router()

const usuarioController = require('../controller/usuariosController')
const usuarioPostMiddleware = require('../middlewares/usuariosMiddlewares')
const autenticacao = require('../middlewares/autenticacaoMiddleware')

router.get('/usuarios/:id',(req, res) => usuarioController.usuariosGetById(req, res))

router.post('/usuarios',
    autenticacao, 
    usuarioPostMiddleware,
    (req, res) => usuarioController.usuarioPost(req, res))

router.put('/usuarios/:id',
    autenticacao,
    (req, res) => usuarioController.usuarioPut(req, res))

router.delete('/usuarios/:id',
    autenticacao,
    (req, res) => usuarioController.usuarioDelete(req, res))

module.exports = router;
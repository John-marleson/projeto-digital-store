const express = require('express')
const router = express.Router()

const Controller = require('../controller/loginController')
const autenticacao = require('../middlewares/autenticacaoMiddleware')
const middleware = require('../middlewares/loginMiddleware')

router.post('/login',
    autenticacao,
    middleware,
    (req, res) => Controller.loginPost(req, res)
)

module.exports = router
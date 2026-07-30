const express = require('express')
const app = express()
app.use(express.json())

const rotasUsuario = require('./routers/usuariosRouter')
const rotasLogin = require('./routers/loginRouter')

app.use(rotasUsuario)
app.use(rotasLogin)

module.exports = app;
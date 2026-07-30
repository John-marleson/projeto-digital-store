const express = require('express')
const app = express()
const rotasUsuario = require('./routers/usuariosRouter')

app.use(express.json())

app.use('/usuarios', rotasUsuario)

module.exports = app;
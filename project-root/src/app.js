const express = require('express')
const app = express()
const rotasUsuario = require('./routers/usuariosRouter')

app.use(express.json())

app.use(rotasUsuario)

module.exports = app;
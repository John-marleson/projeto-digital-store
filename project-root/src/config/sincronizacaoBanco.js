const sequelize = require('./conexaoBanco')

const usuarioModel = require('../models/UsuariosModel')
const categoriasModel = require('../models/CategoriasModel')
const produtosModel = require('../models/ProdutosModel')

sequelize.authenticate()

    sequelize.authenticate()
    .then(async () => {
        await usuarioModel.sync({force: true})
        await categoriasModel.sync({force: true})
        await produtosModel.sync({force: true})
        console.log('conexão com as tabelas foi um sucesso!')
    })
    .catch((erro) => {
        console.log(erro)
    })

module.exports = sequelize;
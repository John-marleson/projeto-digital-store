const app = require('./app')
require('dotenv').config({path: '../.env'})

const sequelize = require('./config/conexaoBanco')

sequelize.authenticate()
.then(async () => {
    app.listen(process.env.PORT, ()=>{
        console.log(`servidor rodando na porta ${process.env.PORT}`)
        console.log(`acesse: ${process.env.ENDERECO_API}`)
    })
})
.catch((erro) => {
    console.log(erro)
})

module.exports = sequelize;
const path = require('path');
const { Sequelize } = require('sequelize')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(process.env.NOME_BANCO, process.env.NOME_USUARIO_BANCO, process.env.SENHA_BANCO, {
    host: process.env.HOST_BANCO,
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize;
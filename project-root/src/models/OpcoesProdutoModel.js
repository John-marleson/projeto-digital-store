const sequelize = require('../config/sequelize')
const {DataTypes} = require('sequelize')

const produtoModel = require('./ProdutosModel')

const opcoesProdutos = sequelize.define('opcoesporduto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            Model: produtoModel,
            key: 'id'
        }
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM('quadrado', 'circulo'),
        allowNull: true
    },
    radius: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo: {
        type: DataTypes.ENUM('texto', 'cor'),
        allowNull: true
    },
    valoresProduto: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
},
{
    tableName: 'opcoesprodutos',
    timestamps: false
})

module.exports = opcoesProdutos;
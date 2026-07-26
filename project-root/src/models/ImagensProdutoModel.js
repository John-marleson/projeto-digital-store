const sequelize = require('../config/sequelize')
const {DataTypes} = require('sequelize')

const produtoModel = require('./ProdutosModel')

const imagensProduto = sequelize.define('imagensproduto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: produtoModel,
            key: 'id'
        }
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    path: {
        type: DataTypes.STRING(2048),
        allowNull: false
    }
},{
    tableName: 'imagensproduto',
    timestamps: false
})

module.exports = imagensProduto;
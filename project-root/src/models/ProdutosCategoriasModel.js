const sequelize = require('../config/conexaoBanco'); 
const { DataTypes } = require('sequelize');

const CategoriasModel = require('./CategoriasModel')
const ProdutoModel = require('./ProdutosModel')

const ProdutosCategorias = sequelize.define('ProdutosCategorias', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,     
        references: {
            model: ProdutoModel,
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,      
        references: {
            model: CategoriasModel,
            key: 'id'
        }
    }
}, {
    tableName: 'produtoscategorias',
    timestamps: false  
});

module.exports = ProdutosCategorias;
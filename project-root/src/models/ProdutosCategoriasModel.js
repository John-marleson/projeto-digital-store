const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

const ProdutosCategorias = sequelize.define('ProdutosCategorias', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,     
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,      
        references: {
            model: 'categorias',
            key: 'id'
        }
    }
}, {
    tableName: 'produtoscategorias',
    timestamps: false  
});

module.exports = ProdutosCategorias;
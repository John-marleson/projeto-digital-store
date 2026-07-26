const sequelize = require('../config/conexaoBanco')
const {DataTypes} = require('sequelize')

const produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    preco: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    price_with_discount: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    }
},
{
    tableName: 'produtos',
    timestamps: true
})

module.exports = produtos;
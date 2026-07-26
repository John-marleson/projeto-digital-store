const sequelize = require('../config/conexaoBanco')
const {DataTypes} = require('sequelize')

const categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    }
},{
    tableName: 'categorias',
    timestamps: true
})

module.exports = categorias;
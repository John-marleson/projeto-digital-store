const sequelize = require('../config/conexaoBanco')
const { DataTypes } = require('sequelize')

const usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
},
{
    tableName: 'usuarios',
    timestamps: true
})

module.exports = usuarios;
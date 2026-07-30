const UsuariosModel = require('../models/UsuariosModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config({ path: '../.env' })

async function serviceLogin(email, senha) {
    try {
        const findEmail = await UsuariosModel.findOne({ where: { email: email } })

        if (!findEmail) {
            return {
                erro: `email não foi encontrado`,
                mensagem: 'verifique se o email realmente esta cadastrado'
            }
        }
        const key = findEmail.dataValues.senha
        const keyCompare = await bcrypt.compare(senha, key)

        if (keyCompare) {
            const token = jwt.sing({
                email: email,
                senha: key
            },
                process.env.SECRET_KEY,
                { expiresIn: '1h' })

            return {
                token: token,
                mensagem: 'login efetuado com sucesso!'
            }
        }

    } catch (erro) {
        console.log(`Erro no serviceLogin: ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

module.exports = {
    serviceLogin
}
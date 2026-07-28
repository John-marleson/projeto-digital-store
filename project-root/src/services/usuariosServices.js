const UsuariosModel = require('../models/UsuariosModel')
const bcrypt = require('bcrypt')

async function usuariosAll() {
    try {
        const dados = await UsuariosModel.findAll()

        if (!dados) {
            return {
                erro: 'Não foi possivel encontrar "/usuarios"'
            }
        }

        return {
            dados: dados[0],
            mensagem: 'Requisição get /usuarios foi um sucesso!'
        }
    } catch (erro) {
        return {
            erro: 'erro interno do sistema'
        }
    }
}

async function usuariosCreate(nome, sobrenome, email, senha) {
    try {
        const emailEncontrado = await UsuariosModel.findOne({ where: { email: email } })

        if (emailEncontrado) {
            console.log('erro email')
            return {
                erro: 'Email já cadastrado.'
            }
        }

        const salts = bcrypt.genSaltSync(10)
        const keyBcrypt = bcrypt.hashSync(senha, salts)

        const dados = await UsuariosModel.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: keyBcrypt
        })

        return {
            dados: dados.dataValues,
            mensagem: 'Usuario criado com sucesso!'
        }
    } catch (erro) {
        console.log(erro)
        return {
            erro: 'erro interno do sistema'
        }
    }
}

async function usuarioUpdate(id, nome, sobrenome, email, senha) {
    try {
        const usuarioPk = await UsuariosModel.findByPk(id)

        if (!usuarioPk) {
            return {
                erro: 'Usuario não encontrado - ID invalido'
            }
        }
        const key = usuarioPk.dataValues
        const compare = await bcrypt.compare(senha, key)

        if (compare) {
            const updateUsuario = await UsuariosModel.update({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
            },
                { where: { id: id } })
            return {
                dados: updateUsuario,
                mensagem: `Usuario de ID n°${id} foi atualizado com sucesso!`
            }
        } else {
            return {
                erro: 'Usuario ou senha invalidos'
            }
        }
    } catch (erro) {
        return {
            erro: 'erro interno do sistema'
        }
    }
}

async function usuarioDelete(id, senha) {
    try {
        const usuarioPk = await UsuariosModel.findByPk(id)

        if (!usuarioPk) {
            return {
                erro: `Usuario de ID n°${id} não foi encontrado`
            }
        }

        const key = usuarioPk.dataValues.senha
        const compare = await bcryp.compare(senha, key)

        if (compare) {
            const deleteUsuario = await UsuariosModel.destroy({ where: { id: id } })

            return {
                dados: 'Usuario deletado'
            }
        }
    } catch (erro) {
        return {
            erro: 'erro interno do sistema'
        }
    }
}


module.exports = {
    usuariosAll,
    usuariosCreate,
    usuarioUpdate,
    usuarioDelete
}
const UsuariosModel = require('../models/UsuariosModel')
const bcrypt = require('bcrypt')

async function usuariosFindById(id) {
    try {
        const dados = await UsuariosModel.findByPk(id)

        if (!dados) {
            return {
                erro: 'Não foi possivel encontrar "/usuarios"'
            }
        }

        return {
            dados: dados.dataValues,
            mensagem: 'Requisição get /usuarios foi um sucesso!'
        }
    } catch (erro) {
        console.log(`erro catch usuarioAll ${erro}`)
        return {
            erro: 'erro interno do sistema'
        }
    }
}

async function usuariosCreate(nome, sobrenome, email, senha) {
    try {
        const emailEncontrado = await UsuariosModel.findOne({ where: { email: email } })

        if (emailEncontrado) {
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

        if (!dados) {
            return {
                erro: 'erro ao criar usuario'
            }
        }


        return {
            dados: {
                nome: dados.dataValues.nome,
                sobrenome: dados.dataValues.sobrenome,
                email: dados.dataValues.email
            },
            mensagem: 'Usuario criado com sucesso!'
        }
    } catch (erro) {
        console.log(`erro catch usuarioCreate ${erro}`)
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
        const key = usuarioPk.dataValues.senha
        const compare = await bcrypt.compare(senha, key)

        if (compare) {
            const updateUsuario = await UsuariosModel.update({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
            },
                { where: { id: id } })
            return
        } else {
            return {
                erro: 'Usuario ou senha invalidos'
            }
        }
    } catch (erro) {
        console.log(`erro catch usuarioUpdate ${erro}`)
        return {
            erro: 'erro interno do sistema'
        }
    }
}

async function usuarioDelete(id) {
    try {
        const usuarioPk = await UsuariosModel.findByPk(id)

        if (!usuarioPk) {
            return {
                erro: `Usuario de ID n°${id} não foi encontrado`
            }
        }

        const deleteUsuario = await UsuariosModel.destroy({ where: { id: id } })

        return {
            dados: 'Usuario deletado com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch usuarioDelete ${erro}`)
        return {
            erro: 'erro interno do sistema'
        }
    }
}


module.exports = {
    usuariosFindById,
    usuariosCreate,
    usuarioUpdate,
    usuarioDelete
}
const serviceUsuario = require('../services/serviceUsuario')

async function usuariosGetById(req, res) {
    try {
        const id = parseInt(req.params.id)

        const getById = await serviceUsuario.usuariosFindById(id)

        if (getById.erro) {
            return res.status(404).json({
                erro: getById.erro
            })
        }

        return res.status(200).json({
            dados: getById.dados,
            mensagem: getById.mensagem
        })
    } catch (erro) {
        console.log(`erro no controller usuariosGetById ${erro}`)
        return res.status(500).json({
            erro: 'erro inteno do sitema'
        })
    }
}

async function usuarioPost(req, res) {
    try {
        const { nome, sobrenome, email, senha } = req.body

        const post = await serviceUsuario.usuariosCreate(nome, sobrenome, email, senha)

        if (post.erro) {
            const statusCode = post.erro == 'Email já cadastrado.' ? 400 : 404
            return res.status(statusCode).json({
                erro: post.erro
            })
        }

        return res.status(201).json({
            dados: post.dados,
            mensagem: post.mensagem
        })
    } catch (erro) {
        console.log(`erro no controller ${erro}`)
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

async function usuarioPut(req, res) {
    try {
        const id = parseInt(req.params.id)
        const { nome, sobrenome, email, senha } = req.body

        const put = await serviceUsuario.usuarioUpdate(id, nome, sobrenome, email, senha)

        if (put.erro) {
            const statusCode = put.erro == 'Usuario ou senha invalidos' ? 400 : 404
            return res.status(statusCode).json({
                erro: put.erro
            })
        }

        return res.status(204)
    } catch (erro) {
        console.log(`erro no controller ${erro}`)
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}
async function usuarioDelete(req, res) {
    try {
        const id = parseInt(req.params.id)

        const destroy = await serviceUsuario.usuarioDelete(id)

        if (destroy.erro) {
            return res.status(404).json({
                erro: destroy.erro
            })
        }

        return res.status(204).json({
            dados: destroy.dados
        })
    } catch (erro) {
        console.log(`erro no controller ${erro}`)
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

module.exports = {
    usuariosGetById,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}
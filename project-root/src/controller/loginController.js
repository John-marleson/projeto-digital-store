const usuarioLogin = require('../services/serviceLogin')

async function loginPost(req, res) {
    try {
        const { email, senha } = req.body

        const loginService = await usuarioLogin.serviceLogin(email, senha)

        if (loginService.erro) {
            return res.status(400).json({
                erro: loginService.erro
            })
        }

        res.status(201).json({
            token: loginService.token,
            mensagem: loginService.mensagem
        })
    } catch (erro) {
        console.log(`erro no loginController ${erro}`)
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

module.exports = {
    loginPost
}
async function loginValidacao(req, res, next) {
    try {
        const { email, senha, confirmarSenha } = req.body

        if (!email) { return res.status(400).json({ erro: 'o email precisa ser informado' }) }
        if (!senha) { return res.status(400).json({ erro: 'é necessario informar a senha para efetuar o login' }) }
        if (!confirmarSenha) { return res.status(400).json({ erro: 'é necessario confirmar sua senha para continuar com o login' }) }

        if (senha != confirmarSenha) {
            return res.status(400).json({
                erro: 'as senhas precisam ser iguais'
            })
        }

        next()
    } catch (erro) {
        console.log(`erro no loginValidacao: ${erro}`)
        return res.status(500).json({
            erro: 'erro interno do sistema'
        })
    }
}

module.exports = loginValidacao
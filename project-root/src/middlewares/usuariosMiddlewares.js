
async function usuarioPostMiddleware(req, res, next) {
    try {
        const { nome, sobrenome, email, senha, confirmarSenha } = req.body

        if (!nome) { return res.status(400).json({ erro: 'o nome precisa ser informado' }) }
        if (!sobrenome) { return res.status(400).json({ erro: 'o sobrenome precisa ser informado' }) }
        if (!email) { return res.status(400).json({ erro: 'o email precisa ser preenchido' }) }
        if (!senha) { return res.status(400).json({ erro: 'a senha precisa ser criada' }) }
        if (!confirmarSenha) { return res.status(400).json({ erro: 'a senha precisa ser confirmada' }) }
        if (senha != confirmarSenha) { return res.status(400).json({ erro: 'as senhas precisam estar iguais' }) }


        next()
    } catch (erro) {
        return res.status(500).json({
            erro: 'erro interno do sistema - validação'
        })
    }
}

module.exports = usuarioPostMiddleware
require('dotenv').config({path: '../.env'})
const jwt = require('jsonwebtoken')

async function autenticacao(req, res, next) {
    try{
        const token = req.headers.authorization.split(' ')[0]
        const verify = await jwt.verify(token, process.env.PALAVRA_SECRETA_JWT)
        if(!verify){
            return res.status(401).json({
                erro: 'token invalido'
            })
        }

        req.infoUsuario = verify
        next()
    }catch(erro){
        return res.status(500).json
    }
}

module.exports = autenticacao
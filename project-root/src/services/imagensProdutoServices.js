const { ImagensProdutoModel } = require('../models/RelacionamentosModel')

async function imgFindAllByProduct(id) {
    try {
        const imgAll = await ImagensProdutoModel.findByPk(id)

        if (!imgAll) {
            return {
                erro: 'imagens não encontradas',
                mensagem: 'verifique se o id do produto realmente existe'
            }
        }

        return {
            dados: imgAll.dataValues
        }
    } catch (erro) {
        console.log(`erro catch imgProdutoAllByProduct ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}
async function imgCreate(product_id, enabled, path) {
    try {
        const imgProductCreate = await ImagensProdutoModel.create({
            product_id: product_id,
            enabled: enabled,
            path: path
        })

        if (!imgProductCreate) {
            return {
                erro: 'não foi possivel criar imagem'
            }
        }

        return {
            dados: 'imagem criada com sucesso!'
        }
    } catch (erro) {
        console.log(`erro catch imgProdutoCreate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}
async function imgUpdate(id, product_id, enabled, path) {
    try {
        const imgPk = await ImagensProdutoModel.findByPk(id)

        if (!imgPk) {
            return {
                erro: 'imagem não encontrada',
                mensagem: 'verifique se o id realmente existe'
            }
        }

        const imgUpdate = await ImagensProdutoModel.update({
            product_id: product_id,
            enabled: enabled,
            path: path
        },
            { where: { id: id } })

        if (!imgUpdate) {
            return {
                erro: 'não foi possivel atualizar a imagem do produto'
            }
        }

        return {
            dados: 'imagem atualizada com sucesso!'
        }
    } catch (erro) {
        console.log(`erro catch imgProdutoUpdate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}
async function imgDelete(id) {
    try {
        const imgPk = await ImagensProdutoModel.findByPk(id)

        if (!imgPk) {
            return {
                erro: 'imagem não encontrada',
                mensagem: 'verifique se o id realmente existe'
            }
        }

        const imgDestroy = await ImagensProdutoModel.destroy({ where: { id: id } })

        return {
            dados: 'imagem deletada com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch imgDelete ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

module.exports = {
    imgFindAll,
    imgCreate,
    imgUpdate,
    imgDelete
}
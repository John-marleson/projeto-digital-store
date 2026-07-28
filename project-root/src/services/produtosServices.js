const { ProdutosModel } = require('../models/RelacionamentosModel')

async function produtosAll() {
    try {
        const dados = await ProdutosModel.findAll()

        if (!dados) {
            return {
                erro: 'produto não encontrado'
            }
        }

        return {
            dados: dados[0]
        }
    } catch (erro) {
        console.log(`erro catch produtosAll ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

async function produtosCreate(enabled, nome, slug, use_in_menu, stock, description, preco, price_with_discount) {
    try {
        const produtosCreate = await ProdutosModel.create({
            enabled: enabled,
            nome: nome,
            slug: slug,
            use_in_menu: use_in_menu,
            stock: stock,
            description: description,
            preco: preco,
            price_with_discount: price_with_discount
        })

        if (!produtosCreate) {
            return {
                erro: 'não foi possivel criar o produto'
            }
        }

        return {
            dados: produtosCreate.dataValues
        }
    } catch (erro) {
        console.log(`erro catch produtosCreate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

async function produtosUpdate(id, enabled, nome, slug, use_in_menu, stock, description, preco, price_with_discount) {
    try {
        const produtosPk = await ProdutosModel.findByPk(id)

        if (!produtosUpdate) {
            return {
                erro: 'produto não encontrado'
            }
        }

        const produtosUpdate = await ProdutosModel.update({
            enabled: enabled,
            nome: nome,
            slug: slug,
            use_in_menu: use_in_menu,
            stock: stock,
            description: description,
            preco: preco,
            price_with_discount: price_with_discount
        },
            { where: { id: id } })

        return {
            dados: 'produto atualizado com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch produtosUpdate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

async function produtosDelete(id) {
    try {
        const produtoPk = await ProdutosModel.findByPk(id)

        if (!produtoPk) {
            return {
                erro: 'produto não encotrado'
            }
        }

        const deleteProduto = await ProdutosModel.destroy({ where: { id: id } })
        return {
            dados: 'produto deletado com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch produtosDelete ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

module.exports = {
    produtosAll,
    produtosCreate,
    produtosDelete,
    produtosUpdate
}
const categorias = require('../models/CategoriasModel')
const { CategoriasModel } = require('../models/relacionamentosModel')

async function categoriasFindAll() {
    try {
        const dados = await CategoriasModel.findAll()

        if (!dados) {
            return {
                erro: 'Não foi possivel listar as categorias'
            }
        }

        return {
            dados: dados[0]
        }
    } catch (erro) {
        console.log(`erro catch categoriasAll ${erro}`)
        return {
            erro: erro.message
        }
    }
}

async function categoriasCreate(nome, slug, use_in_menu) {
    try {
        const dados = await CategoriasModel.create({
            nome: nome,
            slug: slug,
            use_in_menu: use_in_menu
        })
        if (!dados) {
            return {
                erro: 'Falha ao criar a categoria'
            }
        }
        return {
            dados: 'Categoria criada com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch categoriasCreate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

async function categoriasUpdate(id, nome, slug, use_in_menu) {
    try {
        const categoriaPk = await CategoriasModel.findByPk(id)

        if (!categoriaPk) {
            return {
                erro: 'Categoria não encontrada'
            }
        }

        const categoriaUpdate = await CategoriasModel.update({
            nome: nome,
            slug: slug,
            use_in_menu: use_in_menu
        },
            { where: { id: id } })

        return {
            dados: 'Categoria atualizado com sucesso'
        }
    } catch (erro) {
        console.log(`erro catch categoriasUpdate ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

async function categoriasDelete(id,) {
    try {
        const categoriaPk = await CategoriasModel.findByPk(id)

        if (!categoriaPk) {
            return {
                erro: 'categoria não encontrada'
            }
        }

        const deleteCategoria = await CategoriasModel.destroy({ where: { id: id } })
        return {
            dados: 'sucesso ao deletar categoria'
        }
    } catch (erro) {
        console.log(`erro catch categoriasDelete ${erro}`)
        return {
            erro: 'erro interno do servidor'
        }
    }
}

module.exports = {
    categoriasFindAll,
    categoriasCreate,
    categoriasDelete,
    categoriasUpdate
}
const { ProdutosCategoriasModel } = require('../models/RelacionamentosModel')

async function produtosCategoriasFindAll() {
    try {
        const dados = await ProdutosCategoriasModel.findAll();
 
        if (!dados) {
            return {
                erro: 'Não foi possível listar as categorias do produto'
            }
        }
 
        return {
            dados: dados
        }
    } catch (erro) {
        console.error('Erro em produtosCategoriasFindAll:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function produtosCategoriasCreate(product_id, category_id) {
    try {
        // como a PK é composta, verifica se essa combinação já existe antes de criar,
        // pra não estourar erro de PK duplicada e sim retornar uma mensagem clara
        const jaExiste = await ProdutosCategoriasModel.findOne({
            where: { product_id: product_id, category_id: category_id }
        });
 
        if (jaExiste) {
            return {
                erro: 'Essa categoria já está vinculada a esse produto'
            }
        }
 
        const vinculoCriado = await ProdutosCategoriasModel.create({
            product_id: product_id,
            category_id: category_id
        });
 
        if (!vinculoCriado) {
            return {
                erro: 'Não foi possível vincular a categoria ao produto'
            }
        }
 
        return {
            dados: 'Categoria vinculada ao produto com sucesso'
        }
    } catch (erro) {
        console.error('Erro em produtosCategoriasCreate:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function produtosCategoriasUpdate(product_id, category_id, novo_product_id, novo_category_id) {
    try {
        // update aqui é atípico, já que os dois campos formam a PK.
        // normalmente pra "trocar" um vínculo, a prática mais segura é deletar o antigo e criar o novo,
        // mas deixo o update disponível caso seja realmente necessário no seu fluxo
        const vinculoAtual = await ProdutosCategoriasModel.findOne({
            where: { product_id: product_id, category_id: category_id }
        });
 
        if (!vinculoAtual) {
            return {
                erro: 'Vínculo entre produto e categoria não encontrado'
            }
        }
 
        const vinculoUpdate = await ProdutosCategoriasModel.update({
            product_id: novo_product_id,
            category_id: novo_category_id
        },
        { where: { product_id: product_id, category_id: category_id } });
 
        return {
            dados: 'Vínculo atualizado com sucesso'
        }
    } catch (erro) {
        console.error('Erro em produtosCategoriasUpdate:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function produtosCategoriasDelete(product_id, category_id) {
    try {
        const vinculoAtual = await ProdutosCategoriasModel.findOne({
            where: { product_id: product_id, category_id: category_id }
        });
 
        if (!vinculoAtual) {
            return {
                erro: 'Vínculo entre produto e categoria não encontrado'
            }
        }
 
        const vinculoDelete = await ProdutosCategoriasModel.destroy({
            where: { product_id: product_id, category_id: category_id }
        });
 
        return {
            dados: 'Vínculo removido com sucesso'
        }
    } catch (erro) {
        console.error('Erro em produtosCategoriasDelete:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
module.exports = {
    produtosCategoriasFindAll,
    produtosCategoriasCreate,
    produtosCategoriasUpdate,
    produtosCategoriasDelete
}
 
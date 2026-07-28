const { OpcoesProdutoModel } = require('../models/RelacionamentosModel')

async function opcoesProdutosFindAll() {
    try {
        const dados = await OpcoesProdutos.findAll();
 
        if (!dados) {
            return {
                erro: 'Não foi possível listar as opções de produto'
            }
        }
 
        return {
            dados: dados
        }
    } catch (erro) {
        console.error('Erro em opcoesProdutosFindAll:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function opcoesProdutosCreate(product_id, titulo, shape, radius, tipo, valoresProduto) {
    try {
        const opcaoCriada = await OpcoesProdutos.create({
            product_id: product_id,
            titulo: titulo,
            shape: shape,
            radius: radius,
            tipo: tipo,
            valoresProduto: valoresProduto
        });
 
        if (!opcaoCriada) {
            return {
                erro: 'Não foi possível criar a opção de produto'
            }
        }
 
        return {
            dados: 'Opção de produto criada com sucesso'
        }
    } catch (erro) {
        console.error('Erro em opcoesProdutosCreate:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function opcoesProdutosUpdate(id, product_id, titulo, shape, radius, tipo, valoresProduto) {
    try {
        const opcaoPk = await OpcoesProdutos.findByPk(id);
 
        if (!opcaoPk) {
            return {
                erro: 'Opção de produto não encontrada'
            }
        }
 
        const opcaoUpdate = await OpcoesProdutos.update({
            product_id: product_id,
            titulo: titulo,
            shape: shape,
            radius: radius,
            tipo: tipo,
            valoresProduto: valoresProduto
        },
        { where: { id: id } });
 
        return {
            dados: 'Opção de produto atualizada com sucesso'
        }
    } catch (erro) {
        console.error('Erro em opcoesProdutosUpdate:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
async function opcoesProdutosDelete(id) {
    try {
        const opcaoPk = await OpcoesProdutos.findByPk(id);
 
        if (!opcaoPk) {
            return {
                erro: 'Opção de produto não encontrada'
            }
        }
 
        const opcaoDelete = await OpcoesProdutos.destroy({ where: { id: id } });
 
        return {
            dados: 'Opção de produto deletada com sucesso'
        }
    } catch (erro) {
        console.error('Erro em opcoesProdutosDelete:', erro);
        return {
            erro: 'erro interno do servidor'
        }
    }
}
 
module.exports = {
    opcoesProdutosFindAll,
    opcoesProdutosCreate,
    opcoesProdutosUpdate,
    opcoesProdutosDelete
}
const CategoriasModel = require('./CategoriasModel')
const ImagensProdutoModel = require('./ImagensProdutoModel')
const OpcoesProdutoModel = require('./OpcoesProdutoModel')
const ProdutosCategoriasModel = require('./ProdutosCategoriasModel')
const ProdutosModel = require('./ProdutosModel')
const UsuariosModel = require('./UsuariosModel')

ProdutosModel.hasMany(imagensProdutoModel)
ImagensProdutoModel.belongsTo(produtosModel)

OpcoesProdutoModel.hasOne(produtosModel)
ProdutosModel.hasOne(opcoesProdutoModel)

ProdutosModel.belongsToMany(categoriasModel, {
    through: produtosCategoriasModel,
    foreignKey: 'product_id',
    otherKey: 'category_id'
});
CategoriasModel.belongsToMany(produtosModel, {
    through: produtosCategoriasModel,
    foreignKey: 'category_id',
    otherKey: 'product_id'
});

module.exports = { 
    CategoriasModel,
    ImagensProdutoModel,
    OpcoesProdutoModel,
    ProdutosCategoriasModel,
    ProdutosModel,
    CategoriasModel,
    UsuariosModel
}
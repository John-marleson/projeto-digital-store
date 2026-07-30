const CategoriasModel = require('./CategoriasModel')
const ImagensProdutoModel = require('./ImagensProdutoModel')
const OpcoesProdutoModel = require('./OpcoesProdutoModel')
const ProdutosCategoriasModel = require('./ProdutosCategoriasModel')
const ProdutosModel = require('./ProdutosModel')
const UsuariosModel = require('./UsuariosModel')

ProdutosModel.hasMany(ImagensProdutoModel)
ImagensProdutoModel.belongsTo(ProdutosModel);

ProdutosModel.hasMany(OpcoesProdutoModel);
OpcoesProdutoModel.belongsTo(ProdutosModel);

ProdutosModel.belongsToMany(CategoriasModel);
CategoriasModel.belongsToMany(ProdutosModel);

ProdutosCategoriasModel.belongsTo(ProdutosModel);
ProdutosCategoriasModel.belongsTo(CategoriasModel);
 

module.exports = { 
    CategoriasModel,
    ImagensProdutoModel,
    OpcoesProdutoModel,
    ProdutosModel,
    CategoriasModel,
    UsuariosModel
}
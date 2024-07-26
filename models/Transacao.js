const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario');
const Categoria = require('./Categoria');

const Transacao = sequelize.define('Transacao', {
  tipo: {
    type: DataTypes.ENUM('receita', 'despesa'),
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

Transacao.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Transacao.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = Transacao;

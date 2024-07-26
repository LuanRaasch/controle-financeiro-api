const express = require('express');
const sequelize = require('./config/db');
const verifyToken = require('./middlewares/verifyToken');

const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/transacoes', verifyToken ,transacaoRoutes);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(error => {
    console.log('Erro ao sincronizar o banco de dados:', error);
  });

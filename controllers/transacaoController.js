const Transacao = require('../models/Transacao');

exports.criarTransacao = async (req, res) => {
  try {
    const transacao = await Transacao.create(req.body);
    res.status(201).json(transacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.atualizarTransacao = async (req, res) => {
  const { id } = req.params;
  const { tipo, valor, descricao, data, usuario_id, categoria_id } = req.body;

  try {
    const [updated] = await Transacao.update({tipo, valor, descricao, data, usuario_id, categoria_id}, { where: { id } 
    });

    if (updated) {
      const updatedTransacao = await Transacao.findByPk(id);
      res.status(200).json(updatedTransacao);
    } else {
      res.status(404).json({ message: 'Transação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.visualizarTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const transacao = await Transacao.findByPk(id);

    if (transacao) {
      res.status(200).json(transacao);
    } else {
      res.status(404).json({ message: 'Transação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.excluirTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Transacao.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Transação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

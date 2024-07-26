const Categoria = require('../models/Categoria');

exports.criarCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.atualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    const [updated] = await Categoria.update({nome}, {where: { id }});

    if (updated) {
      const updatedCategoria = await Categoria.findByPk(id);
      res.status(200).json(updatedCategoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  }catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.visualizarCategoria = async (req, res) => {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findByPk(id);

    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.excluirCategoria = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Categoria.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
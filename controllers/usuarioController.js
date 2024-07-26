const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// exports.criarUsuario = async (req, res) => {
//   try {
//     const usuario = await Usuario.create(req.body);
//     res.status(201).json(usuario);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.criarUsuario = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const usuario = await Usuario.create({ ...req.body, senha: hashedPassword });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const [updated] = await Usuario.update({nome, email, senha}, {
      where: { id },
    });

    if (updated) {
      const updatedUsuario = await Usuario.findByPk(id);
      res.status(200).json(updatedUsuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.visualizarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Usuario.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha Incorreta' });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY, {expiresIn: '1h'});

    res.json({ token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

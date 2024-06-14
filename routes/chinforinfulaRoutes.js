const express = require('express');
const router = express.Router();
const Chinforinfula = require('../models/chinforinfula');

// Rota para obter todos os Chinforinfulas
router.get('/', async (req, res) => {
  try {
    const Chinforinfulas = await Chinforinfula.find();
    res.json(Chinforinfulas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter um Chinforinfula por ID
router.get('/:id', getChinforinfula, (req, res) => {
  res.json(res.Chinforinfula);
});

// Rota para criar um novo Chinforinfula
router.post('/', async (req, res) => {
  const chinforinfula = new Chinforinfula({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    endereco: req.body.endereco,
    foto: req.body.foto,
  });

  try {
    const newChinforinfula = await chinforinfula.save();
    res.status(201).json(newChinforinfula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar um Chinforinfula por ID
router.put('/:id', getChinforinfula, async (req, res) => {
  if (req.body.nome != null) {
    res.Chinforinfula.nome = req.body.nome;
  }
  if (req.body.email != null) {
    res.Chinforinfula.email = req.body.email;
  }
  if (req.body.telefone != null) {
    res.Chinforinfula.telefone = req.body.telefone;
  }
  if (req.body.endereco != null) {
    res.Chinforinfula.endereco = req.body.endereco;
  }
  if (req.body.foto != null) {
    res.Chinforinfula.foto = req.body.foto;
  }

  try {
    const updatedChinforinfula = await res.Chinforinfula.save();
    res.json(updatedChinforinfula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para excluir um Chinforinfula por ID
router.delete('/:id', getChinforinfula, async (req, res) => {
  try {
    await res.Chinforinfula.deleteOne();
    res.json({ message: 'Chinforinfula excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getChinforinfula(req, res, next) {
  try {
    const chinforinfula = await Chinforinfula.findById(req.params.id);
    if (chinforinfula == null) {
      return res.status(404).json({ message: 'Chinforinfula não encontrado' });
    }
    res.Chinforinfula = chinforinfula;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;

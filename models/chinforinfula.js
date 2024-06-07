const mongoose = require('mongoose');

const chinforinfulaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  telefone: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: false,
  },
  foto: {
    type: String,
    required: false,
  },
});

const Chinforinfula = mongoose.model('Chinforinfula', chinforinfulaSchema);

module.exports = Chinforinfula;
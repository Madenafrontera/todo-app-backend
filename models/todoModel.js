const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, {
  timestamps: true, 
});

// Crear el modelo
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

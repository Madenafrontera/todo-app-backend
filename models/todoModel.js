const mongoose = require('mongoose');

// Definir el esquema de la tarea
const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, {
  timestamps: true,  // Para incluir createdAt y updatedAt automáticamente
});

// Crear el modelo
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

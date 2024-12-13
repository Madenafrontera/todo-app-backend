const Todo = require('../models/todoModel');

// Crear una nueva tarea
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      task: req.body.task,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: 'Error creando la tarea', error: err });
  }
};

// Obtener todas las tareas
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({ message: 'Error obteniendo las tareas', error: err });
  }
};

// Obtener una tarea por ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: 'Error obteniendo la tarea', error: err });
  }
};

// Actualizar una tarea
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: 'Error actualizando la tarea', error: err });
  }
};

// Eliminar una tarea
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  } catch (err) {
    res.status(400).json({ message: 'Error eliminando la tarea', error: err });
  }
};

const mongoose = require('mongoose');

const ToDoListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const ToDoList = mongoose.model('todolists', ToDoListSchema);

module.exports = ToDoList;

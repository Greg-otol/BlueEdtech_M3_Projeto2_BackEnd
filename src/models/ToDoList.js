const mongoose = require('mongoose');

const ToDoListSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  }
});

const ToDoList = mongoose.model('todolists', ToDoListSchema);

module.exports = ToDoList;

const mongoose = require("mongoose");
const ToDoList = require("../models/ToDoList");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(206).send({ message: "Tarefa não encontrada!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const toDoList = req.body;
  if (!toDoList || !toDoList.name || !toDoList.description || !toDoList.date) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos da tarefa!" });
  }
  next();
};

const validAllToDoLists = async (req, res, next) => {
  const toDoList = await ToDoList.find();
  if (toDoList.length == 0) {
    return res.status(400).send({ message: "Nenhuma tarefa cadastrada!" });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
  validAllToDoLists,
};

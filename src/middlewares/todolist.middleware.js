const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Tarefa não encontrada!" });
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

module.exports = {
  validId,
  validObjectBody,
};

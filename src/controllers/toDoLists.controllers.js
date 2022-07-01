const toDoListsService = require("../services/toDoLists.services");

const allToDoListsController = async (req, res) => {
  const alltoDoLists = await toDoListsService.allToDoListsService();
  res.send(alltoDoLists);
};

const findToDoListByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = await toDoListsService.findToDoListByIdService(
    idParam
  );
  res.send(chosenToDoList);
};

const createToDoListController = async (req, res) => {
  const toDoList = req.body;
  const newToDoList = await toDoListsService.createToDoListservice(toDoList);
  res.status(201).send({
    message: `Tarefa '${toDoList.name.toUpperCase()}' criada com sucesso!`,
    newToDoList,
  });
};

const updateToDoListController = async (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = await toDoListsService.findToDoListByIdService(
    idParam
  );
  const toDoListEdit = req.body;
  const updatedToDoList = await toDoListsService.updateToDoListservice(
    idParam,
    toDoListEdit
  );
  res.status(200).send({
    message: `A tarefa '${chosenToDoList.name.toUpperCase()}' foi editada para '${toDoListEdit.name.toUpperCase()}'!`,
    updatedToDoList,
  });
};

const deleteToDoListController = async (req, res) => {
  const idParam = req.params.id;
  if (idParam == "") {
    return res.status(400).send({ message: 'Envie um ID para selecionar a tarefa!' });
  }
  const chosenToDoList = await toDoListsService.findToDoListByIdService(
    idParam
  );
  await toDoListsService.deleteToDoListservice(idParam);
  res.status(200).send({
    message: `Tarefa '${chosenToDoList.name.toUpperCase()}' removida com sucesso!`,
  });
};

module.exports = {
  allToDoListsController,
  findToDoListByIdController,
  createToDoListController,
  updateToDoListController,
  deleteToDoListController,
};

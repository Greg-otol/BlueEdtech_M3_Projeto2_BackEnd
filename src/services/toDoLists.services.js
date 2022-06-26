const ToDoLists = require("../models/ToDoList");

const allToDoListsService = async () => {
  const toDoLists = await ToDoLists.find();
    return toDoLists;
};

const findToDoListByIdService = async (idParam) => {
  const toDoList = await ToDoLists.findById(idParam);
  return toDoList;
};

const createToDoListservice = async (newToDoList) => {
  const createToDoList = await ToDoLists.create(newToDoList);
  return createToDoList;
};

const updateToDoListservice = async (id, toDoListEdited) => {
  const updateToDoList = await ToDoLists.findByIdAndUpdate(id, toDoListEdited);
  return updateToDoList;
};

const deleteToDoListservice = async (id) => {
  return await ToDoLists.findByIdAndDelete(id);
};

module.exports = {
  allToDoListsService,
  findToDoListByIdService,
  createToDoListservice,
  updateToDoListservice,
  deleteToDoListservice,
};

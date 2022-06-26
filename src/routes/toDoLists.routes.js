const routes = require('express').Router();
const toDoListsController = require('../controllers/toDoLists.controllers');

const {
  validId,
  validObjectBody,
} = require('../middlewares/todolist.middleware');

routes.get('/all-todolists', toDoListsController.allToDoListsController);
routes.get('/find-todolist/:id', validId, toDoListsController.findToDoListByIdController);
routes.post('/create', validObjectBody, toDoListsController.createToDoListController);
routes.put('/update/:id', validId, validObjectBody, toDoListsController.updateToDoListController);
routes.delete('/delete/:id', validId, toDoListsController.deleteToDoListController);

module.exports = routes;

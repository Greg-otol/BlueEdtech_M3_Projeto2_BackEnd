const routes = require('express').Router();
const toDoListsController = require('../controllers/toDoLists.controllers');

const valid = require('../middlewares/todolist.middleware');

routes.get('/all-todolists', valid.validAllToDoLists, toDoListsController.allToDoListsController);
routes.get('/find-todolist/:id', valid.validId, toDoListsController.findToDoListByIdController);
routes.post('/create', valid.validObjectBody, toDoListsController.createToDoListController);
routes.put('/update/:id', valid.validId, valid.validObjectBody, toDoListsController.updateToDoListController);
routes.delete('/delete/:id', valid.validId, toDoListsController.deleteToDoListController);

module.exports = routes;

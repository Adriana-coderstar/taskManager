import { Router } from 'express';
import TaskController from '../../controller/Task/TaskContoller';
import TokenValidate from '../../middleware/tokenValidate';

const route = Router();

route.post('/task/:id', TokenValidate, TaskController.create);
route.get('/task/:id', TokenValidate, TaskController.find);
route.put('/task/:id', TokenValidate, TaskController.update);
route.delete('/task/:id', TokenValidate, TaskController.delete);

export default route;

import { Router } from 'express';
import TaskController from '../../controller/Task/TaskContoller';
import TokenValidate from '../../middleware/tokenValidate';

const route = Router();

route.post('/task', TokenValidate, TaskController.create);

export default route;

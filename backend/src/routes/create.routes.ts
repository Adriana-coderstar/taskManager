import { Router } from 'express';
import CreateController from '../controller/CreateController';

const route = Router();

route.post('/register', CreateController.create);

export default route;

import { Router } from 'express';
import LoginController from '../../controller/Login/LoginController';

const route = Router();

route.post('/login', LoginController.find);

export default route;

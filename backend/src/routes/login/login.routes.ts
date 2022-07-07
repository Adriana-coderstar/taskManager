import { Router } from 'express';
import CreateController from '../../controller/Login/CreateController';
import LoginController from '../../controller/Login/LoginController';
import loginValidate from '../../middleware/loginValidate';

const route = Router();

route.post('/register', loginValidate, CreateController.create);
route.post('/login', loginValidate, LoginController.find);

export default route;

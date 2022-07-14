import { Router } from 'express';
import CreateController from '../../controller/Login/CreateController';
import LoginController from '../../controller/Login/LoginController';
import loginValidate from '../../middleware/loginValidate';
import TokenValidate from '../../middleware/tokenValidate';

const route = Router();

route.post('/register', CreateController.create);
route.post('/login', loginValidate, TokenValidate, LoginController.find);

export default route;

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import errorHandle from './middleware/errorHandle';
import routerLogin from './routes/login/login.routes';
import routeCreateUsers from './routes/login/create.routes';
import routeCreateTasks from './routes/task/task.routes';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.use(errorHandle);
app.use(routerLogin);
app.use(routeCreateUsers);
app.use(routeCreateTasks);

export default app;

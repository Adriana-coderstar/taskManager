import 'dotenv/config';
import Express from 'express';
import cors from 'cors';

import errorHandle from './middleware/errorHandle';
import routerLogin from './routes/login/login.routes';
import routeCreateUsers from './routes/login/create.routes';
import routeCreateTasks from './routes/task/task.routes';

const app = Express();

app.use(Express.json());
app.use(cors());

app.use(errorHandle);
app.use(routerLogin);
app.use(routeCreateUsers);
app.use(routeCreateTasks);

export default app;

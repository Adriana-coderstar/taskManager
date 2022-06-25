import 'dotenv/config';
import Express from 'express';
import cors from 'cors';

import errorHandle from './middleware/errorHandle';
import routerLogin from './routes/login.routes';
import routeCreateUsers from './routes/create.routes';

const app = Express();

app.use(Express.json());
app.use(cors());

app.use(errorHandle);
app.use(routerLogin);
app.use(routeCreateUsers);

export default app;

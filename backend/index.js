import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';

import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/task.routes.js';
import reservaMaquinariaRoute from './routes/reservaMaquinaria.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);
app.use(reservaMaquinariaRoute);

app.listen(PORT);
console.log('Server is listening on port ' + PORT);

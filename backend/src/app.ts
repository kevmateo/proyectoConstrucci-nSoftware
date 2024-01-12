import express from 'express';
import accionesRoute from './routes/acciones.route';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/', accionesRoute);

export default app;
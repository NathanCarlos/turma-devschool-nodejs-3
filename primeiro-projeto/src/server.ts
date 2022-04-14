import express, { Request, Response } from 'express';
import cors from 'cors';
import clientRouter from './routes/clients.routes';
import studentsRouter from './routes/students.routes';
import membersRouter from './routes/members.routes';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/clients', clientRouter);
app.use('/students', studentsRouter);
app.use('/members', membersRouter);


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});



app.listen(port, () => {
    console.log(`Servidor disponível na porta: ${port}`);
});
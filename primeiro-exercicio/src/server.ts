import express, { Request, Response } from 'express';
import cors from 'cors';

const port = 3000;

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "Hello World" });
});

app.get('/students', (req: Request, res: Response) => {
    const students = [
        {
            name: 'Nathan',
            email: 'nathan@gmail.com'
        },
        {
            name: 'Otavio',
            email: 'otavio@gmail.com'
        },
        {
            name: 'Ricardo',
            email: 'ricardo@gmail.com'
        }
    ];
    res.send(students);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});

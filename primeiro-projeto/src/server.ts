import express, { Request, Response } from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

const students = [
    {
        id: 1,
        name: 'Matheus',
        email: 'matheus@gmail.com',
        senha: '123456'
    },
    {
        id: 2,
        name: 'Palloma',
        email: 'palloma@gmail.com',
        senha: '123456'
    },
    {
        id: 3,
        name: 'Paulo',
        email: 'paulo@gmail.com',
        senha: '123456'
    },
    {
        id: 4,
        name: 'Gustavo',
        email: 'gustavo@gmail.com',
        senha: '123456'
    }
];


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});

app.get('/numbers', (req: Request, res: Response) => {
    const numbers = [10, 20, 30, 40, 50];
    res.send(numbers);
});

app.get('/students', (req: Request, res: Response) => {
    res.send(students);
});

app.get('/students/:id', (req: Request, res: Response) => {
    if(!Number(req.params.id)) res.status(502).send({ message: 'O campo de id precisa ser numérico'});
    const student = students.find((std) => std.id === parseInt(req.params.id));
    if(!student) {
        return res.status(404).send({ message: 'Estudante não encontrado! ' });
    } else {
        res.send(student);
    }
});

app.post('/students', (req: Request, res: Response) => {
    students.push(req.body);
    res.status(201).send({ message: "Estudante criado com sucesso!" });
});


app.delete('/students/:id', (req: Request, res: Response) => {
    const student = students.find((std) => std.id === parseInt(req.params.id));
    if (!student) return res.status(404).send({ message: 'Estudante não encontrado! ' });

    const studentIndex = students.findIndex((std) => std.id === parseInt(req.params.id));
    students.splice(studentIndex, 1);
    return res.status(200).send({ message: 'Estudante removido com sucesso!' });
});

app.put('/students/:id', (req: Request, res: Response) => {
    const student = students.find((std) => std.id === parseInt(req.params.id));
    if (!student) return res.status(404).send({ message: 'Estudante não encontrado! ' });

    const studentIndex = students.findIndex((std) => std.id === parseInt(req.params.id));

    students[studentIndex] = {
        id: parseInt(req.params.id),
        name: req.body.name,
        email: req.body.email,
        senha: req.body.senha
    }
    res.status(200).send({ message: 'Estudante atualizado com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor disponível na porta: ${port}`);
});
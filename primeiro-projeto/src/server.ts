import express, { Request, Response } from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});

app.get('/numbers', (req: Request, res: Response) => {
    const numbers = [10, 20, 30, 40, 50];
    res.send(numbers);
})

app.listen(port, () => {
    console.log(`Servidor disponível na porta: ${port}`);
});
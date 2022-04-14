import { Router, Request, Response } from 'express';

const clients = [
    {
        name: 'Augusto',
        email: 'augusto@gmail.com',
        password: '123456'
    },
    {
        name: 'Roberta',
        email: 'roberta@gmail.com',
        password: '123456'
    },
    {
        name: 'Paulo',
        email: 'paulo@gmail.com',
        password: '123456'
    }
];

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send(clients);
});

router.get('/:email', (req: Request, res: Response) => {
    const client = clients.find((c) => c.email === req.params.email);
    res.send(client);
});

export default router;
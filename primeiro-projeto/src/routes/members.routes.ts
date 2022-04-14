import { Router, Request, Response } from 'express';

const members = [
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
    res.send(members);
});

router.get('/:email', (req: Request, res: Response) => {
    const member = members.find((c) => c.email === req.params.email);
    res.send(member);
});

export default router;
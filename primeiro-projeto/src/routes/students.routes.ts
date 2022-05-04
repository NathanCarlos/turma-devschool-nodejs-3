import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import StudentsService from '../services/students.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const students = await StudentsService.getAll();
    res.send(students);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await StudentsService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await StudentsService.create(req.body);
    res.status(201).send(generateMessage("Estudante criado com sucesso!"));
});


router.delete('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = await StudentsService.getById(studentId);
    if (!student) return res.status(404).send(generateMessage('Estudante não encontrado! '));

    await StudentsService.remove(studentId);
    return res.status(200).send(generateMessage('Estudante removido com sucesso!' ));
});

router.put('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = await StudentsService.getById(studentId);
    if (!student) return res.status(404).send(generateMessage('Estudante não encontrado! '));

    await StudentsService.update(studentId, req.body);

    res.status(200).send(generateMessage('Estudante atualizado com sucesso!'));
});


export default router;
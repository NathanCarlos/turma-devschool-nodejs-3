import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import StudentsService from '../services/students.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const students = StudentsService.getAll();
    res.send(students);
});

router.get('/:id', (req: Request, res: Response) => {
    if(!Number(req.params.id)) res.status(502).send(generateMessage('O campo de id precisa ser numérico'));
    const student = StudentsService.getById(parseInt(req.params.id));
    if(!student) {
        return res.status(404).send(generateMessage('Estudante não encontrado! '));
    } else {
        res.send(student);
    }
});

router.post('/', (req: Request, res: Response) => {
    StudentsService.create(req.body);
    res.status(201).send(generateMessage("Estudante criado com sucesso!"));
});


router.delete('/:id', (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = StudentsService.getById(studentId);
    if (!student) return res.status(404).send(generateMessage('Estudante não encontrado! '));

    const studentIndex = StudentsService.getIndexById(studentId);
    StudentsService.removeByIndex(studentIndex);
    return res.status(200).send(generateMessage('Estudante removido com sucesso!' ));
});

router.put('/:id', (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = StudentsService.getById(studentId);
    if (!student) return res.status(404).send(generateMessage('Estudante não encontrado! '));

    const studentIndex = StudentsService.getIndexById(studentId);

    StudentsService.update(studentIndex, req.body);

    res.status(200).send(generateMessage('Estudante atualizado com sucesso!'));
});


export default router;
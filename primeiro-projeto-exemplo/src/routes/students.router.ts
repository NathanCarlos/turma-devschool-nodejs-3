import { Router, Request, Response } from 'express';

const router = Router();

router.get('/students', (req: Request, res: Response) => {
    res.send({ students: [
        {
          id: 1,
          name: 'Nathan Carlos',
          email: 'nathan@gmail.com',
          password: '123456',
          monthlyPayment: 500,
          inclusionDate: '2021-07-24',
          lastMontlyPayment: '2021-07-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        },
        {
          id: 2,
          name: 'Henrique Silva',
          email: 'henrique@gmail.com',
          password: '123456',
          monthlyPayment: 400,
          inclusionDate: '2021-01-24',
          lastMontlyPayment: '2021-06-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        },
        {
          id: 3,
          name: 'Alan Jhonnes',
          email: 'alan@gmail.com',
          password: '123456',
          monthlyPayment: 450,
          inclusionDate: '2021-06-24',
          lastMontlyPayment: '2021-06-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        }
      ]});
});

export default router;
import { Router, Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/students.router';
// const router = Router();

// router.get('/', (req: Request, res: Response) => {
//     res.send({helloWorld: 'Hello World'});
// });

// router.get('/students', (req: Request, res: Response) => {
//     res.send({ students: [
//         {
//           id: 1,
//           name: 'Nathan Carlos',
//           email: 'nathan@gmail.com',
//           password: '123456',
//           monthlyPayment: 500,
//           inclusionDate: '2021-07-24',
//           lastMontlyPayment: '2021-07-24',
//           validRegistration: true,
//           course: 'Devschool MJV Angular'
//         },
//         {
//           id: 2,
//           name: 'Henrique Silva',
//           email: 'henrique@gmail.com',
//           password: '123456',
//           monthlyPayment: 400,
//           inclusionDate: '2021-01-24',
//           lastMontlyPayment: '2021-06-24',
//           validRegistration: true,
//           course: 'Devschool MJV Angular'
//         },
//         {
//           id: 3,
//           name: 'Alan Jhonnes',
//           email: 'alan@gmail.com',
//           password: '123456',
//           monthlyPayment: 450,
//           inclusionDate: '2021-06-24',
//           lastMontlyPayment: '2021-06-24',
//           validRegistration: true,
//           course: 'Devschool MJV Angular'
//         }
//       ]});
// });

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(studentRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Aplicação está online na porta: ${port}`);
});
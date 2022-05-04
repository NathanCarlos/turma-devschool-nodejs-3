import { createConnection } from 'typeorm';
import { Student } from '../entities/student.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'mjv_class',
    entities: [
        Student
    ],
    logging: true,
    // synchronize: true
});
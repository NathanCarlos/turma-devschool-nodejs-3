import { Student } from '../entities/student.entity';
import { getConnection } from 'typeorm';

export class StudentRepository {

    static getAll() {
        return getConnection()
        .getRepository(Student)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Student)
        .findOne(id);
    }

    static create(student: Student) {
        return getConnection()
        .getRepository(Student)
        .insert(student);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(Student)
        .delete({
            id: id,
        });
    }

    static update(id: number, student: Partial<Student>) {
        return getConnection()
        .getRepository(Student)
        .update({
            id: id
        }, student);
    }
}

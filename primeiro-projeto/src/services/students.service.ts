import { Student } from "../models/student.model";

class StudentsService {

    students: Array<Student> = [
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

    getAll() {
        return this.students;
    }

    getById(id: number) {
        return this.students.find((std) => std.id === id);
    }

    getIndexById(id: number) {
        return this.students.findIndex((std) => std.id === id);
    }

    create(student: Student) {
        return this.students.push(student);
    }

    removeByIndex(index: number) {
        return this.students.splice(index, 1);
    }

    update(index: number, student: Student) {
        this.students[index] = {
            id: student.id,
            name: student.name,
            email: student.email,
            senha: student.senha
        };
    }
}

export default new StudentsService();
import { generateMessage } from "../helpers/message.helper";
import { Student } from "../entities/student.entity";
import { StudentRepository } from "../repositories/student.repository";

class StudentsService {

    async getAll() {
        return StudentRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return StudentRepository.getById(id);
    }


    create(student: Student) {
        return StudentRepository.create(student);
    }

    remove(id: number) {
        return StudentRepository.delete(id);
    }

    update(id: number, student: Student) {
        return StudentRepository.update(id, student);
    }
}

export default new StudentsService();
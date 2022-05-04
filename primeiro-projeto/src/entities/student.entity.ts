import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'students' })
export class Student {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 15 })
    password?: string;

    @Column({ name: 'montlhy_payment', type: 'decimal' })
    montlhyPayment?: number;

    @Column({ name: 'created_date', type: 'date' })
    createdDate?: Date | string;
}
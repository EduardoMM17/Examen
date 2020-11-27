import { Column, Entity, Index, ObjectIdColumn, Unique } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    _id: string;

    @Index({ unique: true})
    @Column()
    email: string;

    @Index()
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true})
    telephone: string;

    @Index({ unique: true})
    @Column()
    token: string;
}
import { Person } from 'src/people/entities/person.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Memo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  text: string;

  @Column({ default: false })
  wasRead: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  // many messages can be sent by one person
  @ManyToOne(() => Person, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'from_id' })
  from: Person;

  @ManyToOne(() => Person, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'to_id' })
  to: Person;
}

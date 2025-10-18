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

  // many messages can be sent by one person
  @ManyToOne(() => Person)
  @JoinColumn({ name: 'from' })
  from: string;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'to' })
  to: string;

  @Column({ default: false })
  wasRead: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

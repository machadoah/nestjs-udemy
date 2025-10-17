import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('memos')
export class MemoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  text: string;

  @Column({
    length: 50,
  })
  @Column({
    length: 50,
  })
  from: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  to: string;

  @Column({ default: false })
  wasRead: boolean;

  @Column()
  date: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

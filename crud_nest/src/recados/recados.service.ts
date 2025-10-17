import { Injectable } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';

// nest generate service recados --no-spec

@Injectable()
export class RecadosService {
  private lastId = 1;
  private memos: RecadoEntity[] = [
    {
      id: 1,
      text: 'Este é um recado de teste',
      from: 'Antonio',
      to: 'Isadora',
      wasRead: false,
      date: new Date(),
    },
  ];

  findAll() {
    return this.memos;
  }

  findOne(id: string) {
    return this.memos.find((item) => item.id === Number(id));
  }

  create(body: any) {
    this.lastId++;

    const id = this.lastId;
    const newMemo = {
      id,
      ...body,
    };

    this.memos.push(newMemo);

    return newMemo;
  }

  update(id: string, body: any) {
    const existingMemoIndex = this.memos.findIndex(
      (memo) => memo.id === Number(id),
    );

    if (existingMemoIndex >= 0) {
      const existingMemo = this.memos[existingMemoIndex];

      this.memos[existingMemoIndex] = {
        ...existingMemo,
        ...body,
      };
    }

    return this.memos[existingMemoIndex];
  }

  remove(id: string) {
    const existingMemoIndex = this.memos.findIndex(
      (memo) => memo.id === Number(id),
    );

    if (existingMemoIndex >= 0) {
      this.memos.splice(existingMemoIndex, 1);
    }
  }
}

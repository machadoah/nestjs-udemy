import { Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { CreateMemoDTO } from './dto/create-memo.dto';
import { UpdateMemoDTO } from './dto/update-memo.dto';

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
    const memo = this.memos.find((item) => item.id === Number(id));

    if (memo) {
      return memo;
    }

    // throw new HttpException('Memo not exists.', HttpStatus.NOT_FOUND);
    throw new NotFoundException('Memo not existis.');
  }

  create(createMemoDTO: CreateMemoDTO) {
    this.lastId++;

    const id = this.lastId;
    const initialMemo = { wasRead: false, date: new Date() };

    const newMemo = {
      id,
      ...createMemoDTO,
      ...initialMemo,
    };

    this.memos.push(newMemo);

    return newMemo;
  }

  update(id: string, body: UpdateMemoDTO) {
    const existingMemoIndex = this.memos.findIndex(
      (memo) => memo.id === Number(id),
    );

    if (existingMemoIndex < 0) {
      throw new NotFoundException('Memo not existis.');
    }

    const existingMemo = this.memos[existingMemoIndex];

    this.memos[existingMemoIndex] = {
      ...existingMemo,
      ...body,
    };

    return this.memos[existingMemoIndex];
  }

  remove(id: string) {
    const existingMemoIndex = this.memos.findIndex(
      (memo) => memo.id === Number(id),
    );

    if (existingMemoIndex < 0) {
      throw new NotFoundException('Memo not existis.');
    }

    const memo = this.memos[existingMemoIndex];

    this.memos.splice(existingMemoIndex, 1);

    return memo;
  }
}

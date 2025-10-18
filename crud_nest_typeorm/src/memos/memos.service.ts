import { Injectable, NotFoundException } from '@nestjs/common';
import { Memo } from './entities/memo.entity';
import { CreateMemoDTO } from './dto/create-memo.dto';
import { UpdateMemoDTO } from './dto/update-memo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// nest generate service recados --no-spec

@Injectable()
export class MemosService {
  constructor(
    @InjectRepository(Memo)
    private readonly memoRepository: Repository<Memo>,
  ) {}

  async findAll() {
    return await this.memoRepository.find();
  }

  async findOne(id: number) {
    const memo = await this.memoRepository.findOne({
      where: {
        id: id, // id equals id
      },
    });

    if (memo) {
      return memo;
    }

    throw new NotFoundException('Memo not exists.');
  }

  create(createMemoDTO: CreateMemoDTO) {
    const newMemo = {
      ...createMemoDTO,
    };

    const memo = this.memoRepository.create(newMemo);
    return this.memoRepository.save(memo);
  }

  async update(id: number, updateMemoDTO: UpdateMemoDTO) {
    const memo = await this.memoRepository.preload({ id, ...updateMemoDTO });

    if (!memo) {
      throw new NotFoundException('Memo not exists.');
    }

    return this.memoRepository.save(memo);
  }

  async remove(id: number) {
    const memo = await this.memoRepository.findOneBy({ id: id });

    if (!memo) {
      throw new NotFoundException('Memo not exists.');
    }

    return this.memoRepository.remove(memo);
  }
}

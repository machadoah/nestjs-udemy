import { Module } from '@nestjs/common';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoEntity } from './entities/memo.entity';

// nest generate module recados

@Module({
  controllers: [MemosController],
  providers: [MemosService],
  imports: [TypeOrmModule.forFeature([MemoEntity])],
})
export class MemosModule {}

import { Module } from '@nestjs/common';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';

// nest generate module recados

@Module({
  controllers: [MemosController],
  providers: [MemosService],
})
export class MemosModule {}

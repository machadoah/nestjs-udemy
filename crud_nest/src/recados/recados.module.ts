import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';

// nest generate module recados

@Module({
  controllers: [RecadosController],
})
export class RecadosModule {}

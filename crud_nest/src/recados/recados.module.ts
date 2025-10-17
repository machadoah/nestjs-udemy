import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';

// nest generate module recados

@Module({
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class RecadosModule {}

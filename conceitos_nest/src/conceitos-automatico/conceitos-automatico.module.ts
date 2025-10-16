import { Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller';

// nest generate module conceitos-automatico

@Module({
  controllers: [ConceitosAutomaticoController],
})
export class ConceitosAutomaticoModule {}

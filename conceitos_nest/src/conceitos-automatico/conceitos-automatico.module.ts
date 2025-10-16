import { Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';

// nest generate module conceitos-automatico

@Module({
  controllers: [ConceitosAutomaticoController],
  providers: [ConceitosAutomaticoService],
})
export class ConceitosAutomaticoModule {}

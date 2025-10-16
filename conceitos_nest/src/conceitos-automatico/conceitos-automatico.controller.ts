import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';

// nest generate controller conceitos-automatico --no-spec

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  constructor(
    private readonly conceitosAutomaticoService: ConceitosAutomaticoService,
  ) {}

  @Get()
  getConceitosAutomatico(): string {
    return 'conceitos-automatico';
  }

  @Get('service')
  getConceitosAutomaticoService(): string {
    return this.conceitosAutomaticoService.getHelloService();
  }
}

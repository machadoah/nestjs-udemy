import { Controller, Get } from '@nestjs/common';

// nest generate controller conceitos-automatico --no-spec

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  @Get()
  getConceitosAutomatico(): string {
    return 'conceitos-automatico';
  }
}

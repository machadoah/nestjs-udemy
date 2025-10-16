import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-manual')
export class ConceitosManualController {
  @Get()
  getConceitoManueal(): string {
    return 'conceitos-manual';
  }
}

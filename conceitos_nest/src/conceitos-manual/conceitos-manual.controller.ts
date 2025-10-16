import { Controller, Get } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor(
    private readonly conceitosManualService: ConceitosManualService,
  ) {}

  @Get()
  getConceitoManueal(): string {
    return 'conceitos-manual';
  }

  @Get('service')
  getUseService(): string {
    return this.conceitosManualService.getHelloService();
  }
}

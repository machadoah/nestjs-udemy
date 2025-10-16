import { Injectable } from '@nestjs/common';

// nest generate service conceitos-automatico --no-spec

@Injectable()
export class ConceitosAutomaticoService {
  getHelloService(): string {
    return 'Olá, eu sou uma ação do ConceitosAutomaticoService';
  }
}

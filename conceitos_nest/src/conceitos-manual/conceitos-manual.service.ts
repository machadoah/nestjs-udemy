import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  getHelloService(): string {
    return 'Olá, eu sou uma ação do ConceitosManualService';
  }
}

import { Injectable } from '@nestjs/common';

// nest generate service recados --no-spec

@Injectable()
export class RecadosService {
  getAllRecados(pagination: { limit: number; offset: number }): {
    detail: string;
  } {
    const { limit = 10, offset = 0 } = pagination;

    return {
      detail: `This route return all notes! 🫖
      In interval limit=${limit} and offset=${offset}`,
    };
  }
}

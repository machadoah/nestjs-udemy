import { Controller, Get } from '@nestjs/common';

// nest generate controller recados --no-spec

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return {
      detail: 'This route return all notes',
    };
  }

  @Get(':id')
  findOne() {
    return {
      detail: `This route return ONE note.`,
    };
  }
}

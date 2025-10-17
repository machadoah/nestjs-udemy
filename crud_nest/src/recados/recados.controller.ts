import { Controller, Get, Param } from '@nestjs/common';

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
  findOne(@Param('id') id: string) {
    return {
      detail: `This route return ${id} note.`,
    };
  }
}

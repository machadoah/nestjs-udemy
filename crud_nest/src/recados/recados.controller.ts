import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return {
      detail: 'This route return all notes',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return {
      detail: `This route return ${id} note.`,
    };
  }
}

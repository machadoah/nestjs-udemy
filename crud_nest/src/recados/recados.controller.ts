import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

// nest generate controller recados --no-spec

@Controller('recados')
export class RecadosController {
  @Get()
  @HttpCode(HttpStatus.I_AM_A_TEAPOT)
  findAll() {
    return {
      detail: 'This route return all notes! 🫖',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      detail: `This route return ${id} note.`,
    };
  }

  @Post()
  create(@Body() body: { name: string }) {
    return {
      detail: 'This route create a note!',
      about_note: body.name,
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// nest generate controller recados --no-spec

@Controller('recados')
export class RecadosController {
  @Get()
  @HttpCode(HttpStatus.I_AM_A_TEAPOT)
  findAll(@Query() pagination: { limit: number; offset: number }) {
    const { limit = 10, offset = 0 } = pagination;

    return {
      detail: `This route return all notes! 🫖
      In interval limit=${limit} and offset=${offset}`,
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
      detail: 'details',
      name: body.name,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return {
      id: id,
      name: body.name,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      detail: `Note ${id} deleted.`,
    };
  }
}

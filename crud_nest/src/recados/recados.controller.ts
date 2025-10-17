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
import { RecadosService } from './recados.service';

// nest generate controller recados --no-spec

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  @HttpCode(HttpStatus.I_AM_A_TEAPOT)
  findAll(@Query() pagination: { limit: number; offset: number }) {
    return this.recadosService.getAllRecados(pagination);
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

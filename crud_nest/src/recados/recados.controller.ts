import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateMemoDTO } from './dto/create-memo.dto';
import { UpdateMemoDTO } from './dto/update-memo.dto';

// nest generate controller recados --no-spec

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() createMemoDTO: CreateMemoDTO) {
    return this.recadosService.create(createMemoDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemoDTO: UpdateMemoDTO) {
    return this.recadosService.update(id, updateMemoDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}

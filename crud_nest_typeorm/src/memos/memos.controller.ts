import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MemosService } from './memos.service';
import { CreateMemoDTO } from './dto/create-memo.dto';
import { UpdateMemoDTO } from './dto/update-memo.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

// nest generate controller recados --no-spec

@Controller('memos')
export class MemosController {
  constructor(private readonly memosService: MemosService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.memosService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.memosService.findOne(id);
  }

  @Post()
  create(@Body() createMemoDTO: CreateMemoDTO) {
    return this.memosService.create(createMemoDTO);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMemoDTO: UpdateMemoDTO,
  ) {
    return this.memosService.update(id, updateMemoDTO);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.memosService.remove(id);
  }
}

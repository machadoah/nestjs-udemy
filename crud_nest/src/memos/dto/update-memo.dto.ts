import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoDTO } from './create-memo.dto';
import { IsBoolean, IsOptional } from 'class-validator';

// PartialType creates a new class with optional fields

export class UpdateMemoDTO extends PartialType(CreateMemoDTO) {
  @IsBoolean()
  @IsOptional()
  readonly wasRead?: boolean;
}

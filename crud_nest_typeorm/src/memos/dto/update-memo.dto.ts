import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

// PartialType creates a new class with optional fields

export class UpdateMemoDTO {
  @IsBoolean()
  @IsOptional()
  readonly wasRead?: boolean;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  @IsOptional()
  readonly text?: string;
}

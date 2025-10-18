import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @IsOptional()
  password?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  @IsOptional()
  name?: string;
}

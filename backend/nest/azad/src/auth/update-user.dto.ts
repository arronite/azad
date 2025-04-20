// create-user.dto.ts
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { IsUnique } from './isValid.guard';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsOptional()
  @IsString()
  @IsUnique({ message: 'Phone number already exists' })
  phone: string;

  @IsOptional()
  @IsString()
  @IsUnique({ message: 'Serial already exists' })
  serial: string;

  @IsOptional()
  @IsEmail()
  @IsUnique({ message: 'Email already exists' })
  email: string;
}

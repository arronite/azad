// create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from './isValid.guard';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsUnique({ message: 'Phone number already exists' })
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsUnique({ message: 'Serial already exists' })
  serial: string;

  @IsNotEmpty()
  @IsEmail()
  @IsUnique({ message: 'Email already exists' })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: string[];
}

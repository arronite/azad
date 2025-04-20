import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsPhoneNumber,
} from 'class-validator';

export class SignupDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastname: string;

  @IsString()
  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  serial: string;

  @IsString()
  @MinLength(6)
  password: string;
}

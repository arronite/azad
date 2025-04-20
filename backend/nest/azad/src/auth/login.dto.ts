import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  serial: string;

  @IsString()
  password: string;
}

import {
  Controller,
  Post,
  Body,
  UseGuards,
  Put,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';
import { LoginDto } from './login.dto';
import { SignupDto } from './signup.dto';
import { RoleGuard } from './auth.guard';
import { UpdateUserDto } from './update-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(RoleGuard('admin'))
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return await this.authService.signup(signupDto);
  }

  @Put('update/:serial')
  async update(
    @Param('serial') serial: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.authService.update(serial, updateUserDto);
  }
}

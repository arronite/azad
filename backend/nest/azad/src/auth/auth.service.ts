import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth.entity';
import { CreateUserDto } from './create-user.dto'; // Your CreateUser DTO
import { LoginDto } from './login.dto'; // Your Login DTO
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './signup.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // Register function
  async register(createUserDto: CreateUserDto): Promise<User> {
    const { password, email, serial, name, phone, role } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = this.userRepository.create({
      password: hashedPassword,
      email,
      phone,
      role,
      name,
      serial,
    });

    // Save the user to the database
    return this.userRepository.save(user);
  }

  async signup(
    signupDto: SignupDto,
  ): Promise<{ message: string; info: string }> {
    const { password, email, serial, name, phone, lastname } = signupDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Await the count
    const dbCount = await this.userRepository.count();

    // Set role based on whether any user exists
    const role = dbCount === 0 ? ['admin'] : ['student'];

    // Create and save the user
    const user = this.userRepository.create({
      password: hashedPassword,
      email,
      phone,
      role,
      name,
      lastname,
      serial,
    });

    await this.userRepository.save(user);

    return { message: 'success', info: 'user created.' };
  }

  // Login function

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { serial, password } = loginDto;

    // Find the user by username
    const user = await this.userRepository.findOne({ where: { serial } });

    if (!user) {
      throw new NotFoundException('Invalid credentials');
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new NotFoundException('Invalid credentials');
    }

    // Create JWT token
    const payload = {
      email: user.email,
      serial: user.serial,
      phone: user.phone,
      name: user.name,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
  async update(serial: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { serial } });

    if (!user) {
      throw new NotFoundException(`User with ID ${serial} not found`);
    }

    const updatedUser = this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(updatedUser);
  }
}

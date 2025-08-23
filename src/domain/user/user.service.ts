import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const { password, ...result } = user;
    return result;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.validateUser(email, password);
    const { password: _pw, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findById(id);
  }

  update(id: number, dto: UpdateUserDto) {
    return this.userRepository.update(id, dto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}

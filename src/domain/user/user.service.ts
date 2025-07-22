import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../database/prisma/prisma.service';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        role: dto.role,
        businessId: dto.businessId,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  // Autenticação de login
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pw, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        businessId: true,
        createAt: true,
        updateAt: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        businessId: true,
        createAt: true,
        updateAt: true,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    // Se quiser também atualizar a senha, hash aqui
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = { ...dto } as any;

    if (dto.password) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      data.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}

// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UserService {
//   constructor(private prisma: PrismaService) {}

//   create(dto: CreateUserDto) {
//     return this.prisma.user.create({ data: dto });
//   }

//   findAll() {
//     return this.prisma.user.findMany();
//   }

//   findOne(id: string) {
//     return this.prisma.user.findUnique({ where: { id } });
//   }

//   update(id: string, dto: UpdateUserDto) {
//     return this.prisma.user.update({
//       where: { id },
//       data: dto,
//     });
//   }

//   remove(id: string) {
//     return this.prisma.user.delete({ where: { id } });
//   }
// }

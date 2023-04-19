import { User } from './entity/user.entity';
import { Injectable } from '@nestjs/common';
import { IUserService } from './Interface/user.service.interface';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async getById(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ id: userId });
  }
  async update(userId: number, userDto: CreateUserDto): Promise<UpdateResult> {
    const user = new User(userDto.email, userDto.password);
    return this.userRepository.update({ id: userId }, user);
  }
  async delete(userId: number): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User(userDto.email, userDto.password);
    return this.userRepository.save(user);
  }
}

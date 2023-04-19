import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IUserService {
  create(userDto: CreateUserDto): Promise<User>;
  getAll(): Promise<User[]>;
  getById(userId: number): Promise<User>;
  update(userId: number, userDto: CreateUserDto): Promise<UpdateResult>;
  delete(userId: number): Promise<DeleteResult>;
}

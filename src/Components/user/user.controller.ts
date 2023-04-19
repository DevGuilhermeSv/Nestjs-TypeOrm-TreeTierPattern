import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @Inject('IUserService')
    private readonly userService: UserService,
  ) {}

  @Post()
  public async create(@Body() userDto: any): Promise<User> {
    return await this.userService.create(userDto);
  }
  public async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }
  public async getUser(userId: number): Promise<User> {
    return await this.userService.getById(userId);
  }

  public async updateUser(userId: number, @Body() userDto: any) {
    return await this.userService.update(userId, userDto);
  }

  public async deleteUser(userId: number) {
    return await this.userService.delete(userId);
  }
}

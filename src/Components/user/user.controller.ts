import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post() 
    public async create(@Body() userDto: any): Promise <User> {
        return await this.userService.create(userDto);
    }

}

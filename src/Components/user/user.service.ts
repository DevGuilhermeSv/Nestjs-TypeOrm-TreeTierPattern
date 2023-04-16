import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private readonly userRepository:  Repository<User>
    ){}
    create(userDto: any): Promise<User> {
      const user = new User(userDto.email, userDto.password);
      return this.userRepository.save(user);
    }
}
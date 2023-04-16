import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormconfig';
import { UserModule } from './Components/user/user.module';
import { UserController } from './Components/user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}

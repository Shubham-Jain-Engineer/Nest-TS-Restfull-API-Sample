import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './user.entity';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [TypeOrmModule.forFeature([userEntity])],
  controllers: [UsersController],
  providers: [UsersService, AuthService]
})
export class UsersModule { }

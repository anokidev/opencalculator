/*

  @opencalculator/backend/user/user.module.ts

  This file contains the user module.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { Module } from '@nestjs/common';

import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {};

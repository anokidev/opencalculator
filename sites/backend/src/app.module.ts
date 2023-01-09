/*

  @opencalc/backend/app.module.ts

  This file contains the root module.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

import { Module } from '@nestjs/common';

import { AppController } from './root/app.controller';
import { AppService } from './root/app.service';

import { UserModule } from './modules/user/user.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [UserModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

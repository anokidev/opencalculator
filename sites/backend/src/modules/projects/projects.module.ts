/*

  @opencalc/backend/projects/projects.module.ts

  This file contains the projects module.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

import { Module } from '@nestjs/common';

import { ProjectsController } from './controller/projects.controller';
import { ProjectsService } from './service/projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {};

/*

  @opencalculator/backend/app.module.ts

  This file contains the root's controller.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { Controller, Get, Redirect } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {};

  @Get('/')
  @Redirect('opencalculator.netlify.app', 302)
  getHello(): string {
    return this.appService.getHello();
  };
  
};

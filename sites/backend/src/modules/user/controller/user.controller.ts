import { Controller, Post, Body } from '@nestjs/common';
import Request from "express";

import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

  constructor(private readonly UserService: UserService) {};

  @Post('register')
  signup(@Body() request: Request) {
    
  };

  @Post('delete')
  delete(@Body() request: Request) {

  };

  @Post('edit')
  edit(@Body() request: Request) {

  };

  @Post('login')
  login(@Body() request: Request) {

  };

  @Post('logout')
  logout(@Body() request: Request) {

  };

};

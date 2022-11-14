import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupController } from './signup/signup.controller';
import { LoginController } from './login/login.controller';
import { InfoController } from './info/info.controller';

@Module({
  imports: [],
  controllers: [AppController, SignupController, LoginController, InfoController],
  providers: [AppService],
})
export class AppModule {}

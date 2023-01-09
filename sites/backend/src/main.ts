/*

  @opencalculator/backend/main.ts

  This file initiate the bootstraping process
  by creating an instance of the root module
  (AKA AppModule). Simple as that.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

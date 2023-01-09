/*

  @opencalc/backend/root/app.service.ts

  This file contains the root's service.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Redirecting...";
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  @Get()
  getUserId(): string {
    return this.appService.getUserId('RbknRQ3to0PMts0QU6QWMIprjqL2');
  }
}

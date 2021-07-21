import {Controller, Get, Param, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*Controlador para consultar por id*/
  @Get('user/:id')
  async findId(@Param('id') id, @Res() response) {
    return response.send(await this.appService.getUserId(id));
  }

  @Get( 'users')
  async findPosition(@Param('position') position, @Res() response) {
    return response.send(await this.appService.getUserPosition(position));
  }

}

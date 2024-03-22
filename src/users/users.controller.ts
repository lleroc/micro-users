import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern(UserMSG.INSERTAR)
  insertar(@Payload() userDTO: UserDTO) {
    return this.userService.insertar(userDTO);
  }
  @MessagePattern(UserMSG.TODOS)
  todos() {
    return this.userService.todos();
  }

  @MessagePattern(UserMSG.UNO)
  uno(@Payload() id: string) {
    return this.userService.uno(id);
  }
  @MessagePattern(UserMSG.ACTUALIZAR)
  actualizar(@Payload() payLoad: any) {
    return this.userService.actualizar(payLoad.id, payLoad.userDTO);
  }
  @MessagePattern(UserMSG.ELIMINAR)
  eliminar(@Payload() id: string) {
    return this.userService.eliminar(id);
  }
}

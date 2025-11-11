/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './user.dto';
import {
  AuthenticatedGuard,
  GoogleAuthGuard,
  LocalAuthGuard,
  LoginGard,
} from '../auth/auth.guard';
import { Response as ExpressResponse } from 'express';

@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  async login(@Request() req: any, @Response() res: ExpressResponse) {
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
      });
    } else {
      console.log('not match password');
    }
    return res.send({ message: 'login success' });
  }

  @UseGuards(LoginGard)
  @Post('/login2')
  login2(@Request() req: any, @Response() res: ExpressResponse) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        // maxAge: 1000 * 60 * 60 * 24, //1day
        maxAge: 1000 * 10, //test
      });
    }
    return res.send({ message: 'login2 success' });
  }

  @UseGuards(LoginGard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보입니다';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Request() req: any) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Request() req: any) {
    return req.user;
  }

  @Get('to-google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // Google OAuth로 리다이렉트
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Request() req: any, @Response() res: ExpressResponse) {
    const { user } = req;
    return res.send(user);
  }
}

import { Controller, Get } from "@nestjs/common";

@Controller()
export class HelloController {
  @Get()
  Hello(): string {
    return "Hello, World!";
  }
}

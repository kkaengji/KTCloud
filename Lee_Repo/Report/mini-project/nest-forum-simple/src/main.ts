import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import hbs from 'hbs'; // hbs 임포트

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerHelper('inc', (v) => Number(v) + 1);
  hbs.registerHelper('dec', (v) => Number(v) - 1);
  hbs.registerHelper('gt', (v1, v2, options) => {
    return Number(v1) > Number(v2); // 명시적으로 숫자로 변환 후 비교
  });

  hbs.registerHelper('lt', (v1, v2, options) => {
    return Number(v1) < Number(v2);
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that don't have any decorators
      forbidNonWhitelisted: true, // throws error if unknown properties exist
      transform: true, // auto-transforms payloads to DTO instances
    }),
  );
  await app.listen(3000);
}
bootstrap();

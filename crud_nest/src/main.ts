import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove keys that are not in the DTO
      forbidNonWhitelisted: true, // throws error when the key does not exist
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

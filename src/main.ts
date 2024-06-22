import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: parseInt(process.env.USERS_SERVICES_PORT, 10) || 3006,
    },
  });
  await app.listen();
  console.log(`Microservice 'users' is listening on port ${process.env.USERS_SERVICES_PORT || 3006}`);
}
bootstrap();

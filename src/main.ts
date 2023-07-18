import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap()
  .then(() =>
    console.log(`SUCCESS - server is running on PORT: ${process.env.PORT}.`),
  )
  .catch((e) => console.log(e));

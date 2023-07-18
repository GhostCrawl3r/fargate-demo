import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap()
  .then(() =>
    console.log(
      `SUCCESS - View the graphql playground here: http://localhost:${process.env.PORT}/graphql`,
    ),
  )
  .catch((e) => console.log(e));

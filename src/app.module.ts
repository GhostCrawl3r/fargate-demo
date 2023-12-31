import { ConfigModule } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [ConfigModule.forRoot(), DemoModule],
})
export class AppModule {}

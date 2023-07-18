import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  demo(): string {
    return 'The demo route is working!';
  }
}

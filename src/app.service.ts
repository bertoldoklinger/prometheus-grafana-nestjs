import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    for (let i = 1; i <= 1000; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Hello World!', i);
    }
    return 'Finished';
  }
}

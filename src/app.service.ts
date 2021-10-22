import { Injectable } from '@nestjs/common';
import { SentimentService } from './sentiment/sentiment.service';

@Injectable()
export class AppService {
  constructor(private sentimentService: SentimentService) {}

  getSentiment(message: string) {
    console.log(`Getting sentiment for "${message}"`);
    let sentiment = this.sentimentService.analyze(message);
    return sentiment;
  }

  getUptime(): number {
    return process.uptime();
  }
}

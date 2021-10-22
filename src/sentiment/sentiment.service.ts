import { Injectable } from '@nestjs/common';
import { SentimentData } from './sentiment.entity';

@Injectable()
export class SentimentService {
    sentiment: any
    constructor() {
        const Sentiment = require('sentiment');
        this.sentiment = new Sentiment();
    }
    analyze(message:string) {
        let result:SentimentData = this.sentiment.analyze(message);
        console.log(result);
        let positiveOrNegative = (result.score >= 1);
        return {result: result, sentiment: positiveOrNegative}
    }s
}

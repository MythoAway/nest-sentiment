import { Body, Controller, Get, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from "express"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Redirect("/sentiment")
  justInCase() {return true}

  @Get("sentiment")
  handleSentimentRequest(@Req() req: Request, @Res() res: Response) {
    // @ts-ignore
    let sentiment = this.appService.getSentiment(req.query.message);
    if (sentiment.sentiment === true ) {
      res.render("positive", sentiment.result);
    } else {
      res.render("negative", sentiment.result)
    }
  }

  @Get("stats")
  getStats() {
    return this.appService.statusReport();
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownService } from './markdown/markdown.service';
import { MarkdownController } from './markdown/markdown.controller';

@Module({
  imports: [],
  controllers: [AppController, MarkdownController],
  providers: [AppService, MarkdownService],
})
export class AppModule {}

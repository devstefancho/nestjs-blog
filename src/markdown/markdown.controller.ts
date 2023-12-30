import { Controller, Get, Param } from '@nestjs/common';
import { MarkdownService } from './markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Get('hello')
  async hello(): Promise<string> {
    return 'Hello World!';
  }

  @Get(':slug')
  async getMarkdownFile(
    @Param('slug') slug: string,
  ): Promise<{ html: string; frontmatter: any }> {
    return this.markdownService.parseMarkdownFile(slug);
  }
}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { GrammarService } from './grammar.service';
import { GrammarController } from './grammar.controller';

@Module({
  imports: [HttpModule],
  controllers: [GrammarController],
  providers: [GrammarService],
})
export class GrammarModule {}

import { Get, Module, Param, Post } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';

@Module({
  controllers: [ReviewController]
})
export class ReviewModule {}

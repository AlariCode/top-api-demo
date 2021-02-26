import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';

@Module({
	controllers: [ReviewController]
})
export class ReviewModule { }

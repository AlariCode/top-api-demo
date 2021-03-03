import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserEmail } from 'src/decorators/user-email.decorator';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) { }

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto) {
		return this.reviewService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedDoc = await this.reviewService.delete(id);
		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string, @UserEmail() email: string) {
		console.log(email);
		return this.reviewService.findByProductId(productId);
	}
}

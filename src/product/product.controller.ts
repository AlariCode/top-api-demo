import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { PRODUCT_NOT_FOUND_ERROR } from './product.constants';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) { }

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const product = await this.productService.findById(id);
		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return product;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedProduct = await this.productService.deleteById(id);
		if (!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: ProductModel) {
		const updatedProduct = await this.productService.updateById(id, dto);
		if (!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return updatedProduct;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		return this.productService.findWithReviews(dto);
	}
}

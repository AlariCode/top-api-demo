import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteProductDto } from './dto/delete-product.tdo';
import { FindProductDto } from './dto/find-product.dto';
import { SaveProductDto } from './dto/save-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {

	@Get('get/:id')
	async get(@Param('id') id: string): Promise<ProductModel> {

	}

	@Post('find')
	async getByCategory(@Body() dto: FindProductDto): Promise<ProductModel[]> {

	}

	@Post('save')
	async save(@Body() dto: SaveProductDto): Promise<ProductModel> {

	}

	@Delete('delete')
	async delete(@Body() dto: DeleteProductDto): Promise<SuccessResponse> {

	}
}

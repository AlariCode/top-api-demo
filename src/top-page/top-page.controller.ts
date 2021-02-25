import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteTopPageDto } from './dto/delete-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { FindTopPageResponse } from './dto/find-top-page.response';
import { SaveTopPageModelDto } from './dto/save-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
	@Get('get/:alias')
	async get(@Param('alias') alias: string): Promise<TopPageModel> {

	}

	@Post('find')
	async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse[]> {

	}

	@Post('save')
	async save(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {

	}

	@Delete('delete')
	async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {

	}
}

import { Controller, HttpCode, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FileElementResponse } from './dto/file-element.reposonse';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
	constructor(
		private readonly filesService: FilesService
	) { }

	@Post('upload')
	@HttpCode(200)
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(FileInterceptor('files'))
	async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
		return this.filesService.saveFiles([file]);
	}
}

import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { HhModule } from 'src/hh/hh.module';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';

@Module({
	controllers: [TopPageController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'TopPage'
				}
			}
		]),
		HhModule
	],
	providers: [TopPageService],
})
export class TopPageModule { }

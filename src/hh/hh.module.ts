import { Module } from '@nestjs/common';
import { TopPageModule } from 'src/top-page/top-page.module';
import { HhService } from './hh.service';

@Module({
	providers: [HhService],
	imports: [TopPageModule]
})
export class HhModule { }

import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HhService } from './hh.service';

@Module({
	providers: [HhService],
	imports: [ConfigModule, HttpModule],
	exports: [HhService]
})
export class HhModule { }

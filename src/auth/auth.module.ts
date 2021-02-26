import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthController } from './auth.controller';
import { AuthModel } from './auth.model';

@Module({
	controllers: [AuthController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: AuthModel,
				schemaOptions: {
					collection: 'Auth'
				}
			}
		])
	]
})
export class AuthModule { }

import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJWTConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => {
	return {
		secret: configService.get('JWT_SECRET')
	};
};
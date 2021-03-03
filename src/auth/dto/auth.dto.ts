import { IsString } from 'class-validator';

export class AuthDto {
	@IsString()
	login: string;

	@IsString()
	password: string;
}
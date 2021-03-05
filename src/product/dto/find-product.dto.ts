import { IsNumber, IsString } from 'class-validator';

export class FindProductDto {
	@IsString()
	category: string;

	@IsNumber()
	limit: number;
}
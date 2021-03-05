import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../top-page.model';

export class FindTopPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;
}
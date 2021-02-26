import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ReviewModel extends Base { }
export class ReviewModel extends TimeStamps {
	@prop()
	name: string;

	@prop()
	title: string;

	@prop()
	description: string;

	@prop()
	rating: number;

	@prop()
	createdAt: Date;
}

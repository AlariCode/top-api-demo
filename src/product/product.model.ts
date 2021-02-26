import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
	@prop()
	name: string;

	@prop()
	value: string;
}

export interface ProductModel extends Base { }
export class ProductModel extends TimeStamps {
	@prop()
	image: string;

	@prop()
	title: string;

	@prop()
	price: number;

	@prop()
	oldPrice: number;

	@prop()
	credit: number;

	@prop()
	calculatedRating: number;

	@prop()
	description: string;

	@prop()
	advantages: string;

	@prop()
	disAdvantages: string;

	@prop({ type: () => [String] })
	categories: string[];

	@prop({ type: () => [String] })
	tags: string[];

	@prop({ type: () => [ProductCharacteristic], _id: false })
	characteristics: ProductCharacteristic[];
}

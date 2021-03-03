import { from } from 'rxjs';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserEmail = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		return request.user;
	}
);
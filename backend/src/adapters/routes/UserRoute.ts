import { Router } from 'express';
import { UserUseCase } from '../../application/use-cases/user/UserUseCase';

export class UserRouter {
	readonly router = Router();

	constructor(
		private readonly userUseCase: UserUseCase
	) {
		this.router.get('/userv2', async (req, res) => {
			const result = await this.userUseCase.getUser(req.query);
			res.send(result);
		});
		this.router.post('/userv2', async (req, res) => {
			const result = await this.userUseCase.getUser(req.query);
			res.send(result);
		});
	}
}

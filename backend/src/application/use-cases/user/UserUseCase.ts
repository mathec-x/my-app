import { LoggerService } from '@/application/services/logger/LoggerService';

export class UserUseCase {
	private readonly logger = new LoggerService(UserUseCase.name);

	async getUser(params) {
		this.logger.debug('Init list user', params);
		// throw new Error('error');
		return { body: 'Get User Ok' };
	}
}
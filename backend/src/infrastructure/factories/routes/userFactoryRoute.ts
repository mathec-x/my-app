import { UserUseCase } from '@/application/use-cases/user/UserUseCase';
import { UserRouter } from '@/adapters/routes/UserRoute';

export const makeUserFactoryRoute = () => new UserRouter(
  new UserUseCase()
);

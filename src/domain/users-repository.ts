import { User } from './user';

export interface UsersRepository {
  findAll(): User[];
}

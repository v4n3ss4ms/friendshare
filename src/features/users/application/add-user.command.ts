import { Inject, Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UsersRepository } from '../domain/users.repository';
import { USERS_REPOSITORY } from './users.injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class AddUserCommand {
  constructor(@Inject(USERS_REPOSITORY) private usersRepository: UsersRepository) {}

  async execute(user: User): Promise<void> {
    await this.usersRepository.addUser(user);
  }
}

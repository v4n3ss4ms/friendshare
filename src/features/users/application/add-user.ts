import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UsersLocalRepository } from '../infrastructure/users-local-repository';
@Injectable({
  providedIn: 'root',
})
export class AddUser {
  constructor(private usersLocalRepository: UsersLocalRepository) {}

  execute(user: User): void {
    this.usersLocalRepository.addUser(user);
  }
}

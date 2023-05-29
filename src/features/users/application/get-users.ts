import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UsersLocalRepository } from '../infrastructure/users-local-repository';
@Injectable({
  providedIn: 'root',
})
export class GetUsers {
  users: Array<User> = [];
  constructor(private usersLocalRepository: UsersLocalRepository) {}

  execute(): User[] {
    this.users = this.usersLocalRepository.getAll();
    return this.users;
  }
}

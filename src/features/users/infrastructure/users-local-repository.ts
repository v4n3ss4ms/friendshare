import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UsersRepository } from '../domain/users-repository';
@Injectable({
  providedIn: 'root',
})
export class UsersLocalRepository implements UsersRepository {
  data = [
    {
      id: 1,
      name: 'Paco',
    },
    {
      id: 6,
      name: 'María',
    },
    {
      id: 11,
      name: 'Manolo',
    },
    {
      id: 25,
      name: 'Ana',
    },
  ];
  getAll(): User[] {
    return this.data;
  }
  addUser(user: User): void {
    this.data.push(user);
  }
}

import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UsersRepository } from '../domain/users-repository';
import { Currency } from '../domain/currency';
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
  findAll(): User[] {
    return this.data;
  }
}

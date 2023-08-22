import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root',
})
export class GetUserNameQuery {
  constructor() {}

  execute(id: number, users: User[]) {
    const user: User | undefined = users.find(user => user.id === id);
    return user ? user.name : 'This user no longer exists';
  }
}

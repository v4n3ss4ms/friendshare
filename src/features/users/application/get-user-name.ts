import { Injectable } from '@angular/core';
import { User } from '../domain/user';
@Injectable({
  providedIn: 'root',
})
export class GetUserName {
  constructor() {}

  execute(id: number, users: User[]) {
    const user: User | undefined = users.find((user) => user.id === id);
    const name: string = user ? user.name : 'This user no longer exists';
    return name;
  }
}

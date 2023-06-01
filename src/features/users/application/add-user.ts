import {Inject, Injectable} from '@angular/core';
import {USERS_REPOSITORY} from "../../../app/app.module";
import { User } from '../domain/user';
import {UsersRepository} from "../domain/users-repository";

@Injectable({
  providedIn: 'root',
})
export class AddUser {
  constructor(@Inject(USERS_REPOSITORY) private usersRepository: UsersRepository) {}

  execute(user: User): void {
    this.usersRepository.addUser(user);
  }
}

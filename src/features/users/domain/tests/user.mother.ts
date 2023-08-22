import { User } from '../user';

export class UserMother {
  static paco(): User {
    return {
      id: 1,
      name: 'Paco',
    };
  }
}

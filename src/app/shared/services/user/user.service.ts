import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  createUser(userData: User) {
    console.log(userData);
  }
}

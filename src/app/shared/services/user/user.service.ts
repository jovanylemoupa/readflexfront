import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userBaseUrl = environment.api + '/users';

  constructor(private http: HttpClient) {}

  createUser(userData: User): Observable<any> {
    console.log(userData);
    return this.http.post<any>(this.userBaseUrl + '/create', userData);
  }
}

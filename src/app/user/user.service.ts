import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor(private apiServiceObj: ApiService) {}

  getUsers(): Observable<User[]> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.apiServiceObj.get(url);
  }
}

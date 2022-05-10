import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable, from } from 'rxjs';
import {
  map,
  filter,
  mergeMap,
  tap,
  switchMap,
  flatMap,
  toArray,
} from 'rxjs/operators';
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor(private apiServiceObj: ApiService) {}

  getUsers(): Observable<User[]> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.apiServiceObj.get(url);
  }

  getUserMap(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.apiServiceObj.get(url).pipe(
      map((val) => {
        let newVal = val.map((element: User) => {
          return {
            id: element.id + 1,
            name: element.name,
            email: element.email,
            phone: element.phone,
          };
        });
        return newVal;
      })
    );
  }

  getUsersFilter(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.apiServiceObj.get(url).pipe(
      mergeMap((data) => data),
      filter((person: User) => {
        if (person.id > 5) {
          return true;
        }
      }),
      toArray()
    );
  }
}

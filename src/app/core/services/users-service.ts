import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  searchUsers(term: string) {
  const users = ['Doaa', 'Ahmed', 'Mona', 'Mostafa', 'Yara'];

  return of(
    users.filter(u => u.toLowerCase().includes(term.toLowerCase()))
  ).pipe(delay(500)); 
}

}

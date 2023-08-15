import { Injectable } from '@angular/core';
import { UserInterface } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }


addUser(user: UserInterface) {
  let users = [];
  const storedUsers = localStorage.getItem('Users');
  
  if (storedUsers !== null) {
    users = JSON.parse(storedUsers);
    users = [user, ...users];
  } else {
    users = [user];
  }
  
  localStorage.setItem('Users', JSON.stringify(users));
}

}

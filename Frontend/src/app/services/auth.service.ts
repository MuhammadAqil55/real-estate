import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){

   let userArray =[];
   const storedUsers = localStorage.getItem('Users');
  
  if (storedUsers !== null) {
    userArray = JSON.parse(storedUsers);
   }
   return userArray.find((p:any) => p.userName === user.userName && p.password === user.password);
}

}

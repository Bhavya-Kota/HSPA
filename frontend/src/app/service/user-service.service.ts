import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() {}
 

addUser(user : User){
  let users = [];
  if(localStorage.getItem('Users')){
    users= JSON.parse(localStorage.getItem('Users'));
    //users= [user, (users)];
    users.push(user);
    

  } else {
    users.push(user);
  }
  localStorage.setItem('Users', JSON.stringify(users));
}

}

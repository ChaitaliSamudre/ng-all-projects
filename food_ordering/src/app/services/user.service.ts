import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private myhttp:HttpClient) { }
  getProfile(){
    return this.myhttp.get('http://localhost:4200/api/users')
  }
  loginUser(name: string, phone: string) {
    //rest api call to express
    let loginData = {
      // fname:fname,
      name: name ,
      phone: phone
    };
  
    return this.myhttp.post('api/users/login', loginData);
  }
}

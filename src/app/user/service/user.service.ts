import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { NewUser } from '../model/NewUserModel';
import { UserCreatedModel } from '../model/UserCreatedModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client : HttpClient) { }

  createUser(newUser:NewUser){
    return this.client.post<UserCreatedModel>("/api/user/new",newUser);
  }

  loginUser(username:string,password:string){
    let httpParams = new HttpParams()
    .append("username",username)
    .append("password",password)
    return this.client.post<{
      access_token:string,
      type:string,
      username:string
    }>("/api/user/login",httpParams)
  }
}
